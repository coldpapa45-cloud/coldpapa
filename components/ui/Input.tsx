import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { className, invalid, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "h-11 w-full rounded-xl border bg-white px-3.5 text-[0.95rem] text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] placeholder:text-[var(--muted-2)] transition-all duration-200 ease-out",
        "border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)]/35",
        "focus:outline-none focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[#2563eb24] focus:shadow-[0_10px_28px_rgba(37,99,235,0.10)]",
        invalid && "border-[var(--danger)] bg-[var(--danger-soft)] focus:border-[var(--danger)] focus:ring-[#ef444424] focus:shadow-[0_10px_28px_rgba(239,68,68,0.10)]",
        className,
      )}
      {...rest}
    />
  );
});
