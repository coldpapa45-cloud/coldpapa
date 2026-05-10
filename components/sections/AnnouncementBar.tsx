"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative hidden bg-primary px-4 py-2.5 text-center text-sm font-medium text-white sm:block">
      <span>
        🎉 New: Practice with demo trading before you risk a single naira.{" "}
        <a href="#features" className="underline underline-offset-2 hover:opacity-80 transition-opacity">
          Try it free.
        </a>
      </span>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-opacity"
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
