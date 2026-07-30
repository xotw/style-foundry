import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Bell,
  Calendar,
  CheckCircle2,
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

type Tone = "danger" | "accent" | "warning" | "neutral" | "success";
interface Comment {
  who: string;
  name: string;
  when: string;
  text: string;
}
interface Issue {
  id: string;
  title: string;
  tone: Tone;
  status: string;
  who: string;
  assignee: string;
  due: string;
  sprint: string;
  done: boolean;
  backlog?: boolean;
  description: string;
  attachment?: string;
  comments: Comment[];
}

const INITIAL_ISSUES: Issue[] = [
  {
    id: "ATL-291",
    title: "Checkout drops session on Safari",
    tone: "danger",
    status: "Urgent",
    who: "GH",
    assignee: "Gab H.",
    due: "Today, 18:00",
    sprint: "Cycle 14",
    done: false,
    description:
      "Repro on iOS 26 Safari: session cookie is dropped after the 3DS redirect. Suspect SameSite on the return URL. Two support tickets linked.",
    attachment: "safari-trace.har",
    comments: [
      { who: "AL", name: "Ada", when: "2m", text: "Can repro. Fix looks like a one-liner in the cookie config." },
    ],
  },
  {
    id: "ATL-287",
    title: "Dark mode for the billing screens",
    tone: "accent",
    status: "In progress",
    who: "AL",
    assignee: "Ada L.",
    due: "Wednesday",
    sprint: "Cycle 14",
    done: false,
    description:
      "Invoices, payment methods and the plan picker still hardcode light surfaces. Swap them to semantic tokens and add the dark screenshot set to the review checklist.",
    comments: [
      { who: "GH", name: "Gab", when: "1h", text: "Plan picker is the tricky one — it has inline hex from the old marketing page." },
      { who: "AL", name: "Ada", when: "40m", text: "On it. Tokens branch is up, two screens left." },
    ],
  },
  {
    id: "ATL-284",
    title: "Empty states for the new inbox",
    tone: "warning",
    status: "In review",
    who: "MK",
    assignee: "Mira K.",
    due: "Thursday",
    sprint: "Cycle 14",
    done: false,
    description:
      "Three empty states: no messages, all archived, and filter-with-no-results. Copy approved; illustrations use the accent tone at 20% only.",
    attachment: "empty-states.fig",
    comments: [
      { who: "AL", name: "Ada", when: "3h", text: "Left one comment on the archived state — otherwise ship it." },
    ],
  },
  {
    id: "ATL-279",
    title: "Migrate webhooks to the queue",
    tone: "neutral",
    status: "Todo",
    who: "GH",
    assignee: "Gab H.",
    due: "Friday",
    sprint: "Cycle 15",
    done: false,
    backlog: true,
    description:
      "Webhook fan-out still runs inline in the request path. Move delivery to the queue with retries and a dead-letter after 5 attempts.",
    comments: [],
  },
  {
    id: "ATL-275",
    title: "Onboarding checklist copy pass",
    tone: "success",
    status: "Done",
    who: "AL",
    assignee: "Ada L.",
    due: "—",
    sprint: "Cycle 14",
    done: true,
    description:
      "Rewrote the five checklist steps in plain language. Activation on the first step is up 6% since Tuesday.",
    comments: [
      { who: "MK", name: "Mira", when: "1d", text: "Reads so much better. Shipping the translations next." },
    ],
  },
];

export function AppShowcase({ style }: { style: StyleEntry }) {
  const [issues, setIssues] = useState(INITIAL_ISSUES);
  const [selectedId, setSelectedId] = useState<string | null>("ATL-291");
  const [tab, setTab] = useState("active");
  const [reply, setReply] = useState("");

  const visible = useMemo(() => {
    if (tab === "done") return issues.filter((i) => i.done);
    if (tab === "backlog") return issues.filter((i) => i.backlog && !i.done);
    return issues.filter((i) => !i.done && !i.backlog);
  }, [issues, tab]);

  const selected = issues.find((i) => i.id === selectedId) ?? null;

  const toggleDone = (id: string) =>
    setIssues((cur) =>
      cur.map((i) =>
        i.id === id
          ? { ...i, done: !i.done, status: i.done ? "Todo" : "Done", tone: (i.done ? "neutral" : "success") as Tone }
          : i,
      ),
    );

  const sendReply = () => {
    const text = reply.trim();
    if (!text || !selected) return;
    setIssues((cur) =>
      cur.map((i) =>
        i.id === selected.id
          ? { ...i, comments: [...i.comments, { who: "GH", name: "You", when: "now", text }] }
          : i,
      ),
    );
    setReply("");
  };

  return (
    <div className="flex min-h-screen flex-col">
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
          Interactive — click rows, tabs, checks
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
                {issues.filter((i) => !i.done).length} open · 3 due this week · sprint ends Friday
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

          <Tabs value={tab} onValueChange={setTab} className="mt-4">
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
                {visible.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="py-10 text-center text-sm text-fg-muted">
                      Nothing here — enjoy the calm.
                    </TableCell>
                  </TableRow>
                )}
                {visible.map((r) => (
                  <TableRow
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className={
                      r.id === selectedId
                        ? "cursor-pointer bg-surface-2"
                        : "cursor-pointer transition-colors hover:bg-surface-2/60"
                    }
                  >
                    <TableCell>
                      <button
                        aria-label={r.done ? "Reopen" : "Mark done"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDone(r.id);
                        }}
                        className="grid place-items-center"
                      >
                        {r.done ? (
                          <CheckCircle2 className="size-4 text-success" />
                        ) : (
                          <Circle className="size-4 text-fg-muted transition-colors hover:text-success" />
                        )}
                      </button>
                    </TableCell>
                    <TableCell>
                      <span className="font-code mr-2 text-xs text-fg-muted">{r.id}</span>
                      <span className={r.done ? "text-fg-muted line-through" : "font-medium"}>
                        {r.title}
                      </span>
                    </TableCell>
                    <TableCell>
                      <TBadge tone={r.tone}>{r.status}</TBadge>
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

        {/* Detail panel — follows the selected row */}
        {selected && (
          <aside className="hidden w-80 shrink-0 flex-col border-l-[length:var(--border-width)] border-l-line bg-surface p-5 xl:flex">
            <div className="flex items-start justify-between">
              <span className="font-code text-xs text-fg-muted">{selected.id}</span>
              <button aria-label="Close panel" onClick={() => setSelectedId(null)}>
                <X className="size-4 cursor-pointer text-fg-muted transition-colors hover:text-fg" />
              </button>
            </div>
            <h2 className="font-display mt-2 text-lg leading-snug text-fg">{selected.title}</h2>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <TBadge tone={selected.tone}>{selected.status}</TBadge>
              <TBadge tone="neutral">Mobile app</TBadge>
            </div>
            <dl className="mt-5 space-y-3 text-xs">
              <div className="flex items-center gap-2.5">
                <Clock className="size-3.5 text-fg-muted" />
                <dt className="text-fg-muted">Due</dt>
                <dd className="ml-auto font-medium text-fg">{selected.due}</dd>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="size-3.5 text-fg-muted" />
                <dt className="text-fg-muted">Sprint</dt>
                <dd className="ml-auto font-medium text-fg">{selected.sprint}</dd>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="size-3.5 text-fg-muted" />
                <dt className="text-fg-muted">Assignee</dt>
                <dd className="ml-auto font-medium text-fg">{selected.assignee}</dd>
              </div>
            </dl>
            <div className="mt-5 border-t-[length:var(--border-width)] border-t-line pt-4">
              <p className="text-xs leading-relaxed text-fg-muted">{selected.description}</p>
              {selected.attachment && (
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-accent">
                  <Paperclip className="size-3.5" /> {selected.attachment}
                </span>
              )}
            </div>
            <div className="mt-auto space-y-2 pt-5">
              {selected.comments.map((c, i) => (
                <div key={i} className="rounded-theme bg-surface-2 p-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-5">
                      <AvatarFallback className="text-[8px]">{c.who}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium text-fg">{c.name}</span>
                    <span className="ml-auto text-[10px] text-fg-muted">{c.when}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-fg-muted">{c.text}</p>
                </div>
              ))}
              <TInput
                placeholder="Reply… (Enter to send)"
                className="h-9 text-xs"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendReply();
                }}
              />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
