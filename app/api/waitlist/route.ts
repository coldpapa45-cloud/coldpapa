import { NextResponse } from "next/server";
import { waitlistSchema, type WaitlistPayload } from "@/lib/waitlist";

export const runtime = "nodejs";

const DEFAULT_WAITLIST_BACKEND_URL = "http://localhost:8000/api/v1/communications/waitlist/";
const WAITLIST_BACKEND_TIMEOUT_MS = 8_000;

type BackendErrorBody = Record<string, unknown>;

type WaitlistBackendPayload = {
  email: string;
  name: string;
  trading_experience: "beginner" | "active" | "pro" | "";
  interested_assets: string[];
};

const experienceByLabel = {
  Beginner: "beginner",
  Active: "active",
  Pro: "pro",
} as const;

function getWaitlistBackendUrl(): string {
  return process.env.WAITLIST_BACKEND_URL?.trim() || DEFAULT_WAITLIST_BACKEND_URL;
}

function getWaitlistBackendToken(): string {
  const token = process.env.WAITLIST_BACKEND_TOKEN?.trim();

  if (!token) {
    throw new Error("WAITLIST_BACKEND_TOKEN is not configured");
  }

  return token;
}

function buildBackendPayload(values: WaitlistPayload): WaitlistBackendPayload {
  return {
    email: values.email,
    name: values.name?.trim() || "",
    trading_experience: values.experience ? experienceByLabel[values.experience] : "",
    interested_assets: values.interests ?? [],
  };
}

function isDuplicateSignup(status: number, body: BackendErrorBody): boolean {
  if (status === 409) {
    return true;
  }

  const emailError = body.email;
  const messages = Array.isArray(emailError) ? emailError : [emailError];

  return (
    status === 400 &&
    messages.some((message) => {
      return typeof message === "string" && message.toLowerCase().includes("already exists");
    })
  );
}

async function readBackendError(response: Response): Promise<BackendErrorBody> {
  return response.json().catch(() => ({}));
}

function extractSuccessMessage(body: BackendErrorBody): string | null {
  const directMessage = body.message;
  if (typeof directMessage === "string" && directMessage.trim()) {
    return directMessage.trim();
  }

  const detail = body.detail;
  if (typeof detail === "string" && detail.trim()) {
    return detail.trim();
  }

  return null;
}

function extractErrorMessage(body: BackendErrorBody): string | null {
  const directMessage = extractSuccessMessage(body);
  if (directMessage) {
    return directMessage;
  }

  for (const value of Object.values(body)) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }

    if (Array.isArray(value)) {
      const firstString = value.find((item) => typeof item === "string" && item.trim());
      if (typeof firstString === "string") {
        return firstString.trim();
      }
    }
  }

  return null;
}

function sanitizeBackendStatus(status: number): number {
  if (status >= 400 && status <= 599) {
    return status;
  }

  return 502;
}

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: "invalid_json",
        message: "Request body must be valid JSON.",
      },
      { status: 400 },
    );
  }

  const parsed = waitlistSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "invalid_payload",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  let backendToken: string;

  try {
    backendToken = getWaitlistBackendToken();
  } catch {
    return NextResponse.json(
      {
        error: "server_misconfigured",
        message: "Waitlist service is not configured.",
      },
      { status: 500 },
    );
  }

  const values = parsed.data;
  const userAgent = request.headers.get("user-agent") || null;
  const forwardedFor = request.headers.get("x-forwarded-for");
  const backendPayload = buildBackendPayload(values);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WAITLIST_BACKEND_TIMEOUT_MS);

  let response: Response;

  try {
    response = await fetch(getWaitlistBackendUrl(), {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${backendToken}`,
        ...(forwardedFor ? { "X-Forwarded-For": forwardedFor } : {}),
        ...(userAgent ? { "User-Agent": userAgent } : {}),
      },
      body: JSON.stringify(backendPayload),
    });
  } catch {
    return NextResponse.json(
      {
        error: "waitlist_backend_unreachable",
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }

  if (response.ok) {
    const backendBody = await readBackendError(response);
    const message = extractSuccessMessage(backendBody) || "Waitlist signup submitted successfully.";

    return NextResponse.json(
      {
        ok: true,
        message,
      },
      { status: 201 },
    );
  }

  const backendError = await readBackendError(response);

  if (isDuplicateSignup(response.status, backendError)) {
    return NextResponse.json(
      {
        ok: true,
        duplicate: true,
        message: extractErrorMessage(backendError) || "You are already on the waitlist.",
      },
      { status: 200 },
    );
  }

  return NextResponse.json(
    {
      error: "waitlist_backend_failed",
      message: extractErrorMessage(backendError) || "Could not submit this signup.",
      details: backendError,
    },
    { status: sanitizeBackendStatus(response.status) },
  );
}
