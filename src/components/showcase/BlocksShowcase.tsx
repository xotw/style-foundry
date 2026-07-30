import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Bell, CreditCard, Home, Settings, Users } from "lucide-react";
import type { StyleEntry } from "@/lib/styles-registry";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionTitle, TBadge, TButton, TCard, TInput, TLabel, TTextarea } from "./primitives";

/**
 * Full app blocks — login, dashboard, settings — rendered entirely from the
 * active theme's tokens. Proof that a theme holds up on a real product, not
 * just a component grid.
 */
export function BlocksShowcase({ style }: { style: StyleEntry }) {
  return (
    <div className={`theme-${style.slug} min-h-screen pb-32`}>
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
            eyebrow="App blocks"
            title="Three real product surfaces, one theme."
            description="Login, dashboard and settings assembled from the same token contract — copy any block into a project with its theme file."
          />
        </div>
      </header>

      {/* Login */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <p className="label-caps mb-6 text-fg-muted">01 — Login</p>
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <TCard className="flex flex-col justify-center p-10">
            <h3 className="font-display text-2xl text-fg">Welcome back</h3>
            <p className="mt-2 text-sm text-fg-muted">Sign in to your Atlas workspace.</p>
            <div className="mt-8 space-y-4">
              <div>
                <TLabel htmlFor="b-email">Email</TLabel>
                <TInput id="b-email" type="email" placeholder="ada@atlas.dev" className="mt-2" />
              </div>
              <div>
                <TLabel htmlFor="b-pass">Password</TLabel>
                <TInput id="b-pass" type="password" placeholder="••••••••" className="mt-2" />
              </div>
              <TButton className="w-full justify-center">Sign in</TButton>
              <TButton variant="outline" className="w-full justify-center">
                Continue with SSO
              </TButton>
              <p className="text-center text-xs text-fg-muted">
                No account? <span className="cursor-pointer text-accent">Start a trial</span>
              </p>
            </div>
          </TCard>
          <TCard className="hidden flex-col justify-between bg-surface-2 p-10 lg:flex">
            <p className="font-display text-3xl leading-snug text-fg">
              “We swapped the entire product skin in one afternoon. Nobody believed it was the same
              codebase.”
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Avatar>
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-fg">Ada Lovelace</p>
                <p className="text-xs text-fg-muted">Head of Product, Analytical Engines</p>
              </div>
            </div>
          </TCard>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="label-caps mb-6 text-fg-muted">02 — Dashboard</p>
        <TCard className="overflow-hidden">
          <div className="grid lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r-[length:var(--border-width)] border-r-line bg-surface-2 p-4 lg:block">
              <p className="font-display px-3 pb-4 pt-2 text-lg text-fg">Atlas</p>
              <nav className="space-y-1">
                {[
                  { icon: Home, label: "Overview", active: true },
                  { icon: Users, label: "Customers" },
                  { icon: CreditCard, label: "Billing" },
                  { icon: Bell, label: "Alerts" },
                  { icon: Settings, label: "Settings" },
                ].map(({ icon: Icon, label, active }) => (
                  <span
                    key={label}
                    className={
                      active
                        ? "flex items-center gap-2.5 rounded-theme-sm bg-accent px-3 py-2 text-sm font-medium text-accent-fg"
                        : "flex cursor-pointer items-center gap-2.5 rounded-theme-sm px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-surface hover:text-fg"
                    }
                  >
                    <Icon className="size-4" /> {label}
                  </span>
                ))}
              </nav>
            </aside>
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-xl text-fg">Overview</h3>
                <TButton size="sm">
                  New report <ArrowUpRight className="size-3.5" />
                </TButton>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  ["MRR", "$48,210", "+12.4%"],
                  ["Active seats", "1,284", "+3.1%"],
                  ["Churn", "0.8%", "-0.2pt"],
                ].map(([label, value, delta]) => (
                  <TCard key={label} className="bg-surface-2 p-4">
                    <p className="label-caps text-fg-muted">{label}</p>
                    <p className="font-display mt-2 text-2xl text-fg">{value}</p>
                    <p className="mt-1 text-xs text-accent">{delta}</p>
                  </TCard>
                ))}
              </div>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs text-fg-muted">
                  <span>Quarterly target</span>
                  <span>72%</span>
                </div>
                <Progress value={72} />
              </div>
              <div className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead className="text-right">ARR</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Northwind", "accent", "Active", "Scale", "$28,400"],
                      ["Acme Corp", "success", "Trial", "Growth", "$9,120"],
                      ["Globex", "warning", "Past due", "Scale", "$18,700"],
                      ["Initech", "neutral", "Paused", "Starter", "$3,940"],
                    ].map(([name, tone, status, plan, arr]) => (
                      <TableRow key={name as string}>
                        <TableCell className="font-medium">{name}</TableCell>
                        <TableCell>
                          <TBadge tone={tone as "accent" | "success" | "warning" | "neutral"}>
                            {status}
                          </TBadge>
                        </TableCell>
                        <TableCell>{plan}</TableCell>
                        <TableCell className="text-right">{arr}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </TCard>
      </section>

      {/* Settings */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <p className="label-caps mb-6 text-fg-muted">03 — Settings</p>
        <TCard className="p-8">
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="danger">Danger zone</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="mt-6 max-w-xl space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <TLabel htmlFor="b-first">First name</TLabel>
                  <TInput id="b-first" defaultValue="Ada" className="mt-2" />
                </div>
                <div>
                  <TLabel htmlFor="b-last">Last name</TLabel>
                  <TInput id="b-last" defaultValue="Lovelace" className="mt-2" />
                </div>
              </div>
              <div>
                <TLabel htmlFor="b-bio">Bio</TLabel>
                <TTextarea id="b-bio" rows={3} placeholder="A few words about you" className="mt-2" />
              </div>
              <TButton>Save changes</TButton>
            </TabsContent>
            <TabsContent value="notifications" className="mt-6 max-w-xl space-y-5">
              {[
                ["Product updates", "New features and improvements", true],
                ["Billing alerts", "Invoices, receipts and payment issues", true],
                ["Weekly digest", "A summary of workspace activity", false],
              ].map(([title, body, on]) => (
                <div key={title as string} className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium text-fg">{title}</p>
                    <p className="text-xs text-fg-muted">{body}</p>
                  </div>
                  <Switch defaultChecked={on as boolean} />
                </div>
              ))}
            </TabsContent>
            <TabsContent value="danger" className="mt-6 max-w-xl">
              <div className="themed-border rounded-theme p-5 [border-color:var(--danger)]">
                <p className="text-sm font-medium text-fg">Delete workspace</p>
                <p className="mt-1 text-xs text-fg-muted">
                  Permanently removes the workspace and all its data. This cannot be undone.
                </p>
                <TButton variant="danger" size="sm" className="mt-4">
                  Delete workspace
                </TButton>
              </div>
            </TabsContent>
          </Tabs>
        </TCard>
      </section>
    </div>
  );
}
