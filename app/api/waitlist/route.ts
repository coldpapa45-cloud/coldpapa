import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/waitlist";

export const runtime = "nodejs";

type SupabaseError = {
  code?: string;
  message?: string;
};

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return {
    url: url.replace(/\/$/, ""),
    serviceRoleKey,
  };
}

export async function POST(request: Request) {
  const parsed = waitlistSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "invalid_payload",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const config = getSupabaseConfig();

  if (!config) {
    return NextResponse.json(
      {
        error: "backend_not_configured",
        message: "Supabase environment variables are missing.",
      },
      { status: 503 },
    );
  }

  const values = parsed.data;
  const userAgent = request.headers.get("user-agent");
  const referer = request.headers.get("referer");

  const response = await fetch(`${config.url}/rest/v1/waitlist_signups`, {
    method: "POST",
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email: values.email,
      name: values.name || null,
      trading_experience: values.experience || null,
      interested_assets: values.interests ?? [],
      source: "landing_page",
      referrer: referer,
      user_agent: userAgent,
    }),
  });

  if (response.ok) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const error = (await response.json().catch(() => ({}))) as SupabaseError;

  if (response.status === 409 || error.code === "23505") {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  return NextResponse.json(
    {
      error: "waitlist_insert_failed",
      message: "Could not save this signup.",
    },
    { status: 502 },
  );
}
