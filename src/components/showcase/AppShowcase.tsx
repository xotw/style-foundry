import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bell,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock,
  Filter,
  FolderKanban,
  Home,
  Inbox,
  Paperclip,
  Plus,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react";
import type { StyleEntry } from "@/lib/styles-registry";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TBadge, TButton, TCard, TInput } from "./primitives";

/**
 * A realistic product screen — an issue tracker mid-use — rendered entirely
 * from the active theme's tokens. Full app shell: topbar, sidebar, work table
 * with a selected row, open detail panel, live toast. This is what the theme
 * looks like when people actually use an app built with it.
 */
export function AppShowcase({ style }: { style: StyleEntry }) {
  return (
    <div className={`theme-${style.slug} flex min-h-screen flex-col`}>
      {/* Demo banner */}
      <div className="flex items-center justify-between gap-3 border-b-[length:var(--border-width)] border-b-line bg-surface-2 px-4 py-2">
        <Link
          to="/styles/$slug"
          params={{ slug: style.slug }}
          className="inline-flex items-center gap-2 text-xs text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-3.5" /> {style.name} — app in use
        </Link>
        <span className="label-caps hidden text-fg-muted sm:block">
          Every pixel from the theme tokens
        </span>
      </div>

      {/* Topbar */}
      <header className="flex items-center gap-4 border-b-[length:var(--border-width)] border-b-line bg-surface px-4 py-2.5">
        <span className="font-display text-base text-fg">Atlas</span>
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-fg-muted" />
          <TInput placeholder="Search issues, docs, people…" className="h-8 pl-9 text-xs" />
          <kbd className="font-code absolute right-2.5 top-1/2 -translate-y-1/2 rounded-theme-sm bg-surface px-1.5 py-0.5 text-[10px] text-fg-muted themed-border">
            ⌘K
          </kbd>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <TButton size="sm" variant="ghost" aria-label="Notifications" className="relative">
            <Bell className="size-4" />
            <span className="absolute right-1 top-1 size-2 rounded-full bg-danger" />
          </TButton>
          <Avatar className="size-7">
            <AvatarFallback className="text-[10px]">GH</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 flex-col border-r-[length:var(--border-width)] border-r-line bg-surface-2 p-3 lg:flex">
          <TButton size="sm" className="justify-center">
            <Plus className="size-3.5" /> New issue
          </TButton>
          <nav className="mt-4 space-y-0.5">
            {[
              { icon: Inbox, label: "Inbox", badge: "4" },
              { icon: Home, label: "My work", active: true },
              { icon: FolderKanban, label: "Projects" },
              { icon: Users, label: "Team" },
              { icon: Settings, label: "Settings" },
            ].map(({ icon: Icon, label, badge, active }) => (
              <span
                key={label}
                className={
                  active
                    ? "flex items-center gap-2.5 rounded-theme-sm bg-accent px-2.5 py-1.5 text-[13px] font-medium text-accent-fg"
                    : "flex cursor-pointer items-center gap-2.5 rounded-theme-sm px-2.5 py-1.5 text-[13px] text-fg-muted transition-colors hover:bg-surface hover:text-fg"
                }
              >
                <Icon className="size-4" />
                {label}
                {badge && (
                  <span className="ml-auto rounded-theme-pill bg-danger px-1.5 text-[10px] font-semibold text-accent-fg">
                    {badge}
                  </span>
                )}
              </span>
            ))}
          </nav>
          <p className="label-caps mt-6 px-2.5 text-fg-muted">Projects</p>
          <nav className="mt-2 space-y-0.5">
            {["Mobile app", "Design system", "Q3 launch"].map((p, i) => (
              <span
                key={p}
                className="flex cursor-pointer items-center gap-2.5 rounded-theme-sm px-2.5 py-1.5 text-[13px] text-fg-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <span
                  className="size-2 rounded-theme-pill"
                  style={{ background: ["var(--accent)", "var(--accent-2)", "var(--warning)"][i] }}
                />
                {p}
              </span>
            ))}
          </nav>
          <div className="mt-auto rounded-theme bg-surface p-3 themed-border">
            <div className="flex items-center justify-between text-xs text-fg-muted">
              <span>Seats used</span>
              <span>8/10</span>
            </div>
            <Progress value={80} className="mt-2 h-1.5" />
            <TButton size="sm" variant="outline" className="mt-3 w-full justify-center text-xs">
              Upgrade plan
            </TButton>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="font-display text-xl text-fg">My work</h1>
              <p className="mt-0.5 text-xs text-fg-muted">
                12 open · 3 due this week · sprint ends Friday
              </p>
            </div>
            <div className="flex items-center gap-2">
              <TButton size="sm" variant="outline">
                <Filter className="size-3.5" /> Filter
              </TButton>
              <TButton size="sm">
                <Plus className="size-3.5" /> Add
              </TButton>
            </div>
          </div>

          <Tabs defaultValue="active" className="mt-4">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="backlog">Backlog</TabsTrigger>
              <TabsTrigger value="done">Done</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8" />
                  <TableHead>Issue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead className="text-right">Due</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: "ATL-291",
                    title: "Checkout drops session on Safari",
                    tone: "danger",
                    status: "Urgent",
                    who: "GH",
                    due: "Today",
                    done: false,
                    selected: true,
                  },
                  {
                    id: "ATL-287",
                    title: "Dark mode for the billing screens",
                    tone: "accent",
                    status: "In progress",
                    who: "AL",
                    due: "Wed",
                    done: false,
                  },
                  {
                    id: "ATL-284",
                    title: "Empty states for the new inbox",
                    tone: "warning",
                    status: "In review",
                    who: "MK",
                    due: "Thu",
                    done: false,
                  },
                  {
                    id: "ATL-279",
                    title: "Migrate webhooks to the queue",
                    tone: "neutral",
                    status: "Todo",
                    who: "GH",
                    due: "Fri",
                    done: false,
                  },
                  {
                    id: "ATL-275",
                    title: "Onboarding checklist copy pass",
                    tone: "success",
                    status: "Done",
                    who: "AL",
                    due: "—",
                    done: true,
                  },
                ].map((r) => (
                  <TableRow
                    key={r.id}
                    className={r.selected ? "bg-surface-2" : undefined}
                  >
                    <TableCell>
                      {r.done ? (
                        <CheckCircle2 className="size-4 text-success" />
                      ) : (
                        <Circle className="size-4 text-fg-muted" />
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="font-code mr-2 text-xs text-fg-muted">{r.id}</span>
                      <span className={r.done ? "text-fg-muted line-through" : "font-medium"}>
                        {r.title}
                      </span>
                    </TableCell>
                    <TableCell>
                      <TBadge tone={r.tone as "danger" | "accent" | "warning" | "neutral" | "success"}>
                        {r.status}
                      </TBadge>
                    </TableCell>
                    <TableCell>
                      <Avatar className="size-6">
                        <AvatarFallback className="text-[9px]">{r.who}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="text-right text-xs text-fg-muted">{r.due}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>

        {/* Detail panel — the selected issue, open */}
        <aside className="hidden w-80 shrink-0 flex-col border-l-[length:var(--border-width)] border-l-line bg-surface p-5 xl:flex">
          <div className="flex items-start justify-between">
            <span className="font-code text-xs text-fg-muted">ATL-291</span>
            <X className="size-4 cursor-pointer text-fg-muted" />
          </div>
          <h2 className="font-display mt-2 text-lg leading-snug text-fg">
            Checkout drops session on Safari
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <TBadge tone="danger">Urgent</TBadge>
            <TBadge tone="neutral">Mobile app</TBadge>
          </div>
          <dl className="mt-5 space-y-3 text-xs">
            {[
              [Clock, "Due", "Today, 18:00"],
              [Calendar, "Sprint", "Cycle 14"],
              [Users, "Assignee", "Gab H."],
            ].map(([Icon, k, v]) => (
              <div key={k as string} className="flex items-center gap-2.5">
                {/* @ts-expect-error lucide component in tuple */}
                <Icon className="size-3.5 text-fg-muted" />
                <dt className="text-fg-muted">{k as string}</dt>
                <dd className="ml-auto font-medium text-fg">{v as string}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 border-t-[length:var(--border-width)] border-t-line pt-4">
            <p className="text-xs leading-relaxed text-fg-muted">
              Repro on iOS 26 Safari: session cookie is dropped after the 3DS redirect. Suspect
              SameSite on the return URL. Two support tickets linked.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-accent">
              <Paperclip className="size-3.5" /> safari-trace.har
            </span>
          </div>
          <div className="mt-auto space-y-2 pt-5">
            <div className="rounded-theme bg-surface-2 p-3">
              <div className="flex items-center gap-2">
                <Avatar className="size-5">
                  <AvatarFallback className="text-[8px]">AL</AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium text-fg">Ada</span>
                <span className="ml-auto text-[10px] text-fg-muted">2m</span>
              </div>
              <p className="mt-1.5 text-xs text-fg-muted">
                Can repro. Fix looks like a one-liner in the cookie config.
              </p>
            </div>
            <TInput placeholder="Reply…" className="h-9 text-xs" />
          </div>
        </aside>
      </div>

      {/* Toast */}
      <div className="pointer-events-none fixed bottom-20 right-5 z-40">
        <TCard className="flex items-center gap-3 p-3 pr-5 shadow-theme-2">
          <CheckCircle2 className="size-4 text-success" />
          <div>
            <p className="text-xs font-medium text-fg">Deploy complete</p>
            <p className="text-[11px] text-fg-muted">atlas-web · production · 34s</p>
          </div>
        </TCard>
      </div>
    </div>
  );
}
