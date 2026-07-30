import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Info } from "lucide-react";
import type { StyleEntry } from "@/lib/styles-registry";
import { STYLE_RULES } from "@/lib/style-rules";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SectionTitle, TBadge, TButton, TCard, TInput, TLabel, TTextarea } from "./primitives";

/**
 * The brand book: the complete, self-documenting design system of the active
 * theme — palette with live values, full type hierarchy, shadow/radius scales,
 * every control state. What you would hand a designer joining the project.
 */

const COLOR_TOKENS = [
  ["--bg", "Background"],
  ["--surface", "Surface"],
  ["--surface-2", "Surface 2"],
  ["--fg", "Foreground"],
  ["--fg-muted", "Muted"],
  ["--accent", "Accent"],
  ["--accent-fg", "On accent"],
  ["--accent-2", "Accent 2"],
  ["--line", "Line"],
  ["--success", "Success"],
  ["--warning", "Warning"],
  ["--danger", "Danger"],
] as const;

function useTokenValues(tokens: readonly (readonly [string, string])[]) {
  const ref = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  useEffect(() => {
    if (!ref.current) return;
    const cs = getComputedStyle(ref.current);
    const next: Record<string, string> = {};
    for (const [t] of tokens) next[t] = cs.getPropertyValue(t).trim();
    for (const t of ["--font-display", "--font-body", "--font-mono", "--radius", "--radius-sm", "--radius-lg", "--radius-pill"])
      next[t] = cs.getPropertyValue(t).trim();
    setValues(next);
  });
  return { ref, values };
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16">
      <p className="label-caps mb-6 text-fg-muted">
        {n} — {title}
      </p>
      {children}
    </section>
  );
}

export function BrandBook({ style }: { style: StyleEntry }) {
  const { ref, values } = useTokenValues(COLOR_TOKENS);
  const rules = STYLE_RULES[style.slug];
  const fontOf = (t: string) => (values[t] ?? "").split(",")[0]?.replace(/"/g, "").trim();

  return (
    <div ref={ref} className="min-h-screen pb-32">
      <header className="mx-auto max-w-6xl px-6 pt-12">
        <Link
          to="/styles/$slug"
          params={{ slug: style.slug }}
          className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" /> {style.name}
        </Link>
        <div className="mt-6">
          <SectionTitle
            eyebrow="Brand book"
            title={`The ${style.name} design system, documented.`}
            description={style.tagline}
          />
        </div>
        {rules && (
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <TBadge tone="accent">Use: {rules.use}</TBadge>
            <TBadge tone="neutral">Avoid: {rules.avoid}</TBadge>
          </div>
        )}
      </header>

      {/* 01 — Palette */}
      <Section n="01" title="Color tokens">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {COLOR_TOKENS.map(([token, label]) => (
            <TCard key={token} className="overflow-hidden">
              <div
                className="h-20 w-full themed-border border-x-0 border-t-0"
                style={{ background: `var(${token})` }}
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-fg">{label}</p>
                <p className="font-code mt-1 break-all text-[11px] text-fg-muted">
                  {token} · {values[token] || "…"}
                </p>
              </div>
            </TCard>
          ))}
        </div>
      </Section>

      {/* 02 — Typography */}
      <Section n="02" title="Typography">
        <TCard className="p-8">
          <p className="font-display text-[clamp(4rem,10vw,8rem)] leading-none text-fg">AaBb</p>
          <p className="font-code mt-2 text-xs text-fg-muted">
            Display: {fontOf("--font-display")} · Body: {fontOf("--font-body")} · Mono: {fontOf("--font-mono")}
          </p>
          <div className="mt-8 space-y-5 border-t-[length:var(--border-width)] border-t-line pt-8">
            {(
              [
                ["Display", "font-display text-6xl", "The quick brown fox"],
                ["Heading 1", "font-display text-4xl", "The quick brown fox jumps"],
                ["Heading 2", "font-display text-2xl", "The quick brown fox jumps over"],
                ["Heading 3", "font-display text-xl", "The quick brown fox jumps over the lazy dog"],
                ["Heading 4", "font-display text-base font-semibold", "The quick brown fox jumps over the lazy dog"],
              ] as const
            ).map(([label, cls, text]) => (
              <div key={label} className="grid items-baseline gap-2 sm:grid-cols-[7rem_1fr]">
                <span className="label-caps text-fg-muted">{label}</span>
                <p className={`${cls} text-fg`}>{text}</p>
              </div>
            ))}
            <div className="grid items-baseline gap-2 sm:grid-cols-[7rem_1fr]">
              <span className="label-caps text-fg-muted">Body</span>
              <p className="max-w-2xl text-base leading-relaxed text-fg">
                Body text carries the product. It stays comfortable at length, holds its rhythm
                across paragraphs, and never fights the display face for attention. This is the
                voice your users actually read.
              </p>
            </div>
            <div className="grid items-baseline gap-2 sm:grid-cols-[7rem_1fr]">
              <span className="label-caps text-fg-muted">Body small</span>
              <p className="max-w-2xl text-sm text-fg-muted">
                Secondary copy, helper text and metadata sit one step down in size and one step
                back in contrast — present, never loud.
              </p>
            </div>
            <div className="grid items-baseline gap-2 sm:grid-cols-[7rem_1fr]">
              <span className="label-caps text-fg-muted">Caption</span>
              <p className="label-caps text-fg-muted">The label voice of this system</p>
            </div>
            <div className="grid items-baseline gap-2 sm:grid-cols-[7rem_1fr]">
              <span className="label-caps text-fg-muted">Mono</span>
              <code className="font-code rounded-theme-sm bg-surface-2 px-2 py-1 text-sm text-fg">
                const theme = "{style.slug}";
              </code>
            </div>
          </div>
        </TCard>
      </Section>

      {/* 03 — Elevation & shape */}
      <Section n="03" title="Elevation, shape & lines">
        <div className="grid gap-6 lg:grid-cols-2">
          <TCard className="p-6">
            <p className="text-sm font-semibold text-fg">Shadow scale</p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {(["--shadow-1", "--shadow-2", "--shadow-3", "--glow"] as const).map((s, i) => (
                <div key={s} className="text-center">
                  <div
                    className="mx-auto h-16 w-16 rounded-theme bg-surface"
                    style={{ boxShadow: `var(${s})` }}
                  />
                  <p className="font-code mt-3 text-[11px] text-fg-muted">
                    {i === 3 ? "glow" : `shadow-${i + 1}`}
                  </p>
                </div>
              ))}
            </div>
          </TCard>
          <TCard className="p-6">
            <p className="text-sm font-semibold text-fg">Radius scale</p>
            <div className="mt-6 flex flex-wrap items-end gap-6">
              {(
                [
                  ["--radius-sm", "sm"],
                  ["--radius", "base"],
                  ["--radius-lg", "lg"],
                  ["--radius-pill", "pill"],
                ] as const
              ).map(([r, label]) => (
                <div key={r} className="text-center">
                  <div
                    className="h-16 w-20 bg-accent/20 themed-border [border-color:var(--accent)]"
                    style={{ borderRadius: `var(${r})` }}
                  />
                  <p className="font-code mt-3 text-[11px] text-fg-muted">
                    {label} · {values[r] || "…"}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t-[length:var(--border-width)] border-t-line pt-4">
              <p className="text-sm font-semibold text-fg">Lines</p>
              <div className="mt-3 space-y-3">
                <div className="themed-border border-x-0 border-b-0 pt-1 text-xs text-fg-muted">
                  standard border — var(--line) at var(--border-width)
                </div>
                <div className="border-t-2 border-t-accent pt-1 text-xs text-fg-muted">
                  emphasis rule — accent
                </div>
              </div>
            </div>
          </TCard>
        </div>
      </Section>

      {/* 04 — Buttons */}
      <Section n="04" title="Buttons — every variant, every state">
        <TCard className="p-6">
          <div className="space-y-6">
            {(["primary", "secondary", "outline", "ghost", "danger"] as const).map((variant) => (
              <div key={variant} className="grid items-center gap-3 lg:grid-cols-[7rem_1fr]">
                <span className="label-caps text-fg-muted">{variant}</span>
                <div className="flex flex-wrap items-center gap-3">
                  <TButton variant={variant} size="sm">
                    Small
                  </TButton>
                  <TButton variant={variant}>Medium</TButton>
                  <TButton variant={variant} size="lg">
                    Large
                  </TButton>
                  <TButton variant={variant} disabled>
                    Disabled
                  </TButton>
                  <TButton variant={variant} loading>
                    Loading
                  </TButton>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-fg-muted">
            <Info className="size-3.5" /> Hover and press every button — active/pressed physics are
            part of this theme's signature.
          </p>
        </TCard>
      </Section>

      {/* 05 — Forms */}
      <Section n="05" title="Form controls">
        <div className="grid gap-6 lg:grid-cols-2">
          <TCard className="space-y-4 p-6">
            <div>
              <TLabel htmlFor="bb-default">Default input</TLabel>
              <TInput id="bb-default" placeholder="Placeholder voice" className="mt-2" />
            </div>
            <div>
              <TLabel htmlFor="bb-filled">Filled</TLabel>
              <TInput id="bb-filled" defaultValue="A filled value" className="mt-2" />
            </div>
            <div>
              <TLabel htmlFor="bb-disabled">Disabled</TLabel>
              <TInput id="bb-disabled" disabled placeholder="Unavailable" className="mt-2" />
            </div>
            <div>
              <TLabel htmlFor="bb-area">Textarea</TLabel>
              <TTextarea id="bb-area" rows={3} placeholder="Longer form voice…" className="mt-2" />
            </div>
          </TCard>
          <TCard className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-fg">Switch</p>
                <p className="text-xs text-fg-muted">On and off states</p>
              </div>
              <div className="flex gap-3">
                <Switch defaultChecked />
                <Switch />
              </div>
            </div>
            <div className="flex items-center justify-between border-t-[length:var(--border-width)] border-t-line pt-5">
              <div>
                <p className="text-sm font-medium text-fg">Checkbox</p>
                <p className="text-xs text-fg-muted">Checked and empty</p>
              </div>
              <div className="flex gap-3">
                <Checkbox defaultChecked />
                <Checkbox />
              </div>
            </div>
            <div className="border-t-[length:var(--border-width)] border-t-line pt-5">
              <p className="text-sm font-medium text-fg">Progress</p>
              <Progress value={64} className="mt-3" />
            </div>
            <div className="border-t-[length:var(--border-width)] border-t-line pt-5">
              <p className="text-sm font-medium text-fg">Skeleton</p>
              <div className="mt-3 space-y-2">
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          </TCard>
        </div>
      </Section>

      {/* 06 — Feedback & status */}
      <Section n="06" title="Feedback & status">
        <div className="grid gap-6 lg:grid-cols-2">
          <TCard className="p-6">
            <p className="text-sm font-semibold text-fg">Badges</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <TBadge>Accent</TBadge>
              <TBadge tone="neutral">Neutral</TBadge>
              <TBadge tone="success">Success</TBadge>
              <TBadge tone="warning">Warning</TBadge>
              <TBadge tone="danger">Danger</TBadge>
            </div>
            <p className="mt-6 text-sm font-semibold text-fg">Inline states</p>
            <div className="mt-3 space-y-2 text-sm">
              <p className="flex items-center gap-2 text-success">
                <Check className="size-4" /> Operation completed
              </p>
              <p className="text-warning">Heads up — review before continuing</p>
              <p className="text-danger">Something failed and needs attention</p>
            </div>
          </TCard>
          <TCard className="p-6">
            <p className="text-sm font-semibold text-fg">Data table</p>
            <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Token</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">State</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-code text-xs">--accent</TableCell>
                    <TableCell>Primary action</TableCell>
                    <TableCell className="text-right">
                      <TBadge>Active</TBadge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-code text-xs">--surface</TableCell>
                    <TableCell>Card background</TableCell>
                    <TableCell className="text-right">
                      <TBadge tone="success">Stable</TBadge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-code text-xs">--line</TableCell>
                    <TableCell>Borders and rules</TableCell>
                    <TableCell className="text-right">
                      <TBadge tone="neutral">Quiet</TBadge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TCard>
        </div>
      </Section>

      {/* 07 — Voice of the system */}
      {rules && (
        <Section n="07" title="How this system behaves">
          <div className="grid gap-6 md:grid-cols-3">
            {(
              [
                ["Spacing", rules.spacing],
                ["Type", rules.type],
                ["Motion", rules.motion],
              ] as const
            ).map(([label, body]) => (
              <TCard key={label} className="p-5">
                <p className="label-caps text-accent">{label}</p>
                <p className="mt-3 text-sm text-fg-muted">{body}</p>
              </TCard>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
