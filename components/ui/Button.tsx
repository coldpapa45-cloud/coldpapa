import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false };

type ButtonAsChild = BaseProps & {
  asChild: true;
  children: React.ReactElement;
};

type Props = ButtonAsButton | ButtonAsChild;

const variants: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--ink),#111827_48%,var(--primary))] bg-[length:180%_180%] text-white shadow-[0_10px_28px_rgba(37,99,235,0.22),0_2px_6px_rgba(10,15,30,0.12)] hover:-translate-y-0.5 hover:bg-[position:100%_50%] hover:shadow-[0_16px_42px_rgba(37,99,235,0.30),0_3px_10px_rgba(10,15,30,0.14)] active:translate-y-0 active:scale-[0.98]",
  secondary:
    "bg-white text-[var(--ink)] border border-[var(--border)] shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:border-[var(--primary)]/35 hover:bg-[linear-gradient(180deg,#ffffff,var(--primary-soft))] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] active:translate-y-0 active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--ink)] hover:bg-[var(--surface-2)] hover:text-[var(--primary)] active:scale-[0.98]",
  dark:
    "bg-white text-[var(--ink)] shadow-sm hover:-translate-y-0.5 hover:bg-[#f3f4f6] hover:shadow-[0_14px_32px_rgba(255,255,255,0.16)] active:translate-y-0 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-[1rem]",
};

const baseClasses =
  "group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full font-medium whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb33] disabled:pointer-events-none disabled:opacity-60";

export function Button(props: Props) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if ("asChild" in props && props.asChild) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  const { asChild: _asChild, ...rest } = props as ButtonAsButton;
  void _asChild;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
