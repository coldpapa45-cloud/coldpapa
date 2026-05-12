"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import {
  experienceOptions,
  interestOptions,
  waitlistSchema,
  type WaitlistFormValues,
} from "@/lib/waitlist";

type FormValues = WaitlistFormValues;

type WaitlistResponse = {
  ok?: boolean;
  duplicate?: boolean;
  message?: string;
};

async function submitWaitlist(values: WaitlistFormValues): Promise<WaitlistResponse> {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = (await response.json().catch(() => ({}))) as WaitlistResponse;

  if (!response.ok) {
    throw new Error(data.message || "Waitlist signup failed.");
  }

  return data;
}

export function WaitlistForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Thanks for joining. We will reach out as new access windows open. No spam, no noise.",
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { email: "", name: "", interests: [] },
    mode: "onTouched",
  });

  const experience = watch("experience");
  const interests = watch("interests") ?? [];

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    try {
      const result = await submitWaitlist(values);
      setSuccessMessage(
        result.message || "Thanks for joining. We will reach out as new access windows open. No spam, no noise.",
      );
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again in a moment.");
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
      aria-live="polite"
      className={cn(
          "rounded-3xl border border-[var(--success)]/30 bg-[linear-gradient(135deg,var(--success-soft),#ffffff)] p-6 shadow-[0_18px_44px_rgba(16,185,129,0.14)] sm:p-8",
          className,
        )}
      >
        <div className="flex size-11 items-center justify-center rounded-full bg-[var(--success)] text-white shadow-[0_12px_28px_rgba(16,185,129,0.28)]">
          <Check className="size-5" aria-hidden="true" />
        </div>
        <h3 className="h-card mt-4 text-[var(--ink)]">You&apos;re on the list.</h3>
        <p className="mt-2 text-sm text-[var(--ink-2)]">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-md)] transition-all duration-300 ease-out hover:border-[var(--primary)]/30 hover:shadow-[0_20px_52px_rgba(37,99,235,0.12),var(--shadow-md)] focus-within:border-[var(--primary)]/45 focus-within:shadow-[0_22px_58px_rgba(37,99,235,0.16),var(--shadow-md)] sm:p-7",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),var(--primary-2),transparent)] opacity-70"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="wl-email" className="text-xs font-medium text-[var(--ink-2)]">
            Email address <span aria-hidden="true" className="text-[var(--danger)]">*</span>
          </label>
          <Input
            id="wl-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            invalid={!!errors.email}
            aria-describedby={errors.email ? "wl-email-error" : undefined}
            className="mt-1.5"
            {...register("email")}
          />
          {errors.email && (
            <p id="wl-email-error" className="mt-1.5 text-xs font-medium text-[var(--danger)]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="wl-name" className="text-xs font-medium text-[var(--ink-2)]">
            Name <span className="text-[var(--muted)]">(optional)</span>
          </label>
          <Input
            id="wl-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="mt-1.5"
            {...register("name")}
          />
        </div>

        <div>
          <span className="text-xs font-medium text-[var(--ink-2)]">
            Trading experience <span className="text-[var(--muted)]">(optional)</span>
          </span>
          <div role="radiogroup" aria-label="Trading experience" className="mt-1.5 grid grid-cols-3 gap-1.5">
            {experienceOptions.map((opt) => {
              const active = experience === opt;
              return (
                <button
                  type="button"
                  role="radio"
                  aria-checked={active}
                  key={opt}
                  onClick={() => setValue("experience", active ? undefined : opt, { shouldValidate: false })}
                  className={cn(
                    "h-11 rounded-xl border text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb24] active:scale-[0.97]",
                    active
                      ? "border-[var(--ink)] bg-[linear-gradient(135deg,var(--ink),#1f2937)] text-white shadow-[0_10px_24px_rgba(10,15,30,0.18)]"
                      : "border-[var(--border)] bg-white text-[var(--ink-2)] hover:-translate-y-0.5 hover:border-[var(--primary)]/35 hover:bg-[var(--primary-soft)]",
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-2">
          <span className="text-xs font-medium text-[var(--ink-2)]">
            Interested assets <span className="text-[var(--muted)]">(optional)</span>
          </span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {interestOptions.map((opt) => {
              const active = interests.includes(opt);
              return (
                <button
                  type="button"
                  aria-pressed={active}
                  key={opt}
                  onClick={() => {
                    const next = active ? interests.filter((i) => i !== opt) : [...interests, opt];
                    setValue("interests", next, { shouldValidate: false });
                  }}
                  className={cn(
                    "h-9 rounded-full border px-3.5 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb24] active:scale-[0.97]",
                    active
                      ? "border-[var(--primary)] bg-[linear-gradient(135deg,var(--primary-soft),#ffffff)] text-[var(--primary)] shadow-[0_8px_20px_rgba(37,99,235,0.12)]"
                      : "border-[var(--border)] bg-white text-[var(--ink-2)] hover:-translate-y-0.5 hover:border-[var(--primary)]/35 hover:bg-[var(--surface-2)]",
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {submitError && (
        <p role="alert" className="mt-4 text-sm font-medium text-[var(--danger)]">
          {submitError}
        </p>
      )}

      <p className="mt-5 text-xs text-[var(--muted)]">
        Crypto assets are volatile and involve risk. Coldpapa does not provide financial advice.
        We will only email you about access. No spam.
      </p>

      <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-[var(--muted)]">
          By joining, you accept our{" "}
          <Link href="/terms" className="font-medium text-[var(--ink-2)] underline-offset-4 hover:text-[var(--primary)] hover:underline">
            terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium text-[var(--ink-2)] underline-offset-4 hover:text-[var(--primary)] hover:underline">
            privacy policy
          </Link>
          .
        </span>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Joining…
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
