import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Token-only primitives. Every visual property resolves to a theme token
 * defined in src/styles/themes/<slug>.css — no hardcoded colors here.
 */

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const sizeMap: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
  icon: "h-10 w-10 justify-center",
};

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg themed-border [border-color:var(--accent)] hover:brightness-110 shadow-theme-1",
  secondary: "bg-surface-2 text-fg themed-border hover:bg-surface shadow-theme-1",
  outline: "bg-transparent text-fg themed-border hover:bg-surface-2",
  ghost: "bg-transparent text-fg-muted border border-transparent hover:text-fg hover:bg-surface-2",
  danger:
    "bg-danger text-accent-fg themed-border [border-color:var(--danger)] hover:brightness-110 shadow-theme-1",
};

export const TButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
  }
>(function TButton(
  { className, variant = "primary", size = "md", loading, children, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center rounded-theme font-medium transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        "active:translate-x-px active:translate-y-px",
        "disabled:opacity-45 disabled:pointer-events-none",
        sizeMap[size],
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {loading && (
        <span className="size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  );
});

export function TCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-surface themed-border rounded-theme shadow-theme-1 frost",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-theme-sm bg-surface-2 px-3 text-sm text-fg themed-border",
        "placeholder:text-fg-muted/70 transition-colors",
        "focus:outline-none focus:border-[var(--accent)] focus:shadow-theme-glow",
        "disabled:opacity-45",
        className,
      )}
      {...props}
    />
  );
}

export function TTextarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-theme-sm bg-surface-2 p-3 text-sm text-fg themed-border",
        "placeholder:text-fg-muted/70 focus:outline-none focus:border-[var(--accent)] focus:shadow-theme-glow",
        className,
      )}
      {...props}
    />
  );
}

export function TLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("label-caps block text-fg-muted", className)} {...props} />;
}

export function TBadge({
  className,
  tone = "accent",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "accent" | "neutral" | "success" | "warning" | "danger";
}) {
  const tones = {
    accent: "bg-accent text-accent-fg [border-color:var(--accent)]",
    neutral: "bg-surface-2 text-fg",
    success: "bg-success text-accent-fg [border-color:var(--success)]",
    warning: "bg-warning text-accent-fg [border-color:var(--warning)]",
    danger: "bg-danger text-accent-fg [border-color:var(--danger)]",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-theme-pill px-2.5 py-0.5 text-[11px] font-semibold themed-border",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="label-caps mb-3 text-accent">{eyebrow}</p>}
      <h2 className="font-display text-3xl leading-tight text-fg sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-fg-muted">{description}</p>}
    </div>
  );
}
