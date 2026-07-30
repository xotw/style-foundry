import * as React from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Bell, ChevronDown, Home, Search, Settings, Trash2, User } from "lucide-react";
import type { StyleEntry } from "@/lib/styles-registry";
import { SectionTitle, TBadge, TButton, TCard, TInput, TLabel, TTextarea } from "./primitives";
import { cn } from "@/lib/utils";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const panel = "bg-surface themed-border rounded-theme text-fg shadow-theme-2 frost";
const item =
  "text-fg rounded-theme-sm focus:bg-surface-2 focus:text-fg data-[highlighted]:bg-surface-2 data-[highlighted]:text-fg";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="label-caps mb-4 text-accent">{title}</h2>
      <TCard className="p-6">
        <div className="flex flex-wrap items-start gap-x-8 gap-y-6">{children}</div>
      </TCard>
    </section>
  );
}

function Stack({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-[180px] space-y-3">
      <p className="label-caps text-fg-muted">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export function ComponentGallery({ style }: { style: StyleEntry }) {
  const [progress, setProgress] = React.useState(38);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [page, setPage] = React.useState(2);
  const [commandOpen, setCommandOpen] = React.useState(false);

  return (
    <TooltipProvider delayDuration={150}>
      <div className="min-h-screen">
        <header className="sticky top-0 z-30 border-b-[length:var(--border-width)] border-b-line bg-bg/85 frost">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <span className="grid size-7 place-items-center rounded-theme-sm bg-accent text-[11px] font-bold text-accent-fg">
                {style.name.slice(0, 1)}
              </span>
              <span className="font-display text-sm font-semibold text-fg">
                {style.name} — components
              </span>
            </div>
            <Link to="/styles/$slug" params={{ slug: style.slug }}>
              <TButton variant="outline" size="sm">
                View landing
              </TButton>
            </Link>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionTitle
            eyebrow={style.fontPairing}
            title="Every component, skinned by the theme."
            description={style.tagline}
          />

          <div className="mt-12 space-y-12">
            <Section id="buttons" title="Buttons">
              <Stack label="Variants">
                <TButton>Primary</TButton>
                <TButton variant="secondary">Secondary</TButton>
                <TButton variant="outline">Outline</TButton>
                <TButton variant="ghost">Ghost</TButton>
                <TButton variant="danger">Danger</TButton>
              </Stack>
              <Stack label="Sizes">
                <TButton size="sm">Small</TButton>
                <TButton size="md">Medium</TButton>
                <TButton size="lg">Large</TButton>
                <TButton size="icon" aria-label="Settings">
                  <Settings className="size-4" />
                </TButton>
              </Stack>
              <Stack label="States">
                <TButton loading>Loading</TButton>
                <TButton disabled>Disabled</TButton>
                <TButton variant="outline" disabled>
                  Disabled
                </TButton>
              </Stack>
            </Section>

            <Section id="inputs" title="Inputs & form controls">
              <Stack label="Text input">
                <div className="w-56 space-y-2">
                  <TLabel htmlFor="g-email">Email</TLabel>
                  <TInput id="g-email" placeholder="ada@studio.com" />
                </div>
              </Stack>
              <Stack label="Textarea">
                <TTextarea className="w-64" rows={3} placeholder="Notes…" />
              </Stack>
              <Stack label="Select">
                <Select defaultValue="studio">
                  <SelectTrigger
                    className={cn(
                      "h-10 w-48 rounded-theme-sm bg-surface-2 text-fg themed-border",
                      "focus:border-[var(--accent)] focus:ring-0",
                    )}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={panel}>
                    <SelectItem value="solo" className={item}>
                      Solo
                    </SelectItem>
                    <SelectItem value="studio" className={item}>
                      Studio
                    </SelectItem>
                    <SelectItem value="agency" className={item}>
                      Agency
                    </SelectItem>
                  </SelectContent>
                </Select>
              </Stack>
              <Stack label="Checkbox">
                <label className="flex items-center gap-2 text-sm text-fg">
                  <Checkbox
                    defaultChecked
                    className="themed-border rounded-theme-sm data-[state=checked]:bg-accent data-[state=checked]:text-accent-fg data-[state=checked]:border-[var(--accent)]"
                  />
                  Enable tokens
                </label>
                <label className="flex items-center gap-2 text-sm text-fg-muted">
                  <Checkbox className="themed-border rounded-theme-sm" />
                  Beta channel
                </label>
              </Stack>
              <Stack label="Radio">
                <RadioGroup defaultValue="a" className="flex gap-4">
                  {[
                    ["a", "Grid"],
                    ["b", "Flow"],
                  ].map(([v, l]) => (
                    <label key={v} className="flex items-center gap-2 text-sm text-fg">
                      <RadioGroupItem
                        value={v}
                        className="themed-border text-accent data-[state=checked]:border-[var(--accent)]"
                      />
                      {l}
                    </label>
                  ))}
                </RadioGroup>
              </Stack>
              <Stack label="Switch">
                <Switch className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-surface-2 themed-border" />
                <Switch
                  defaultChecked
                  className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-surface-2 themed-border"
                />
              </Stack>
              <Stack label="Slider">
                <Slider
                  defaultValue={[60]}
                  max={100}
                  step={1}
                  className={cn(
                    "w-56",
                    "[&>span:first-child]:bg-surface-2 [&>span:first-child]:themed-border [&>span:first-child]:h-2",
                    "[&>span:first-child>span]:bg-accent",
                    "[&_[role=slider]]:bg-accent [&_[role=slider]]:border-[var(--line)] [&_[role=slider]]:rounded-theme-pill",

                  )}
                />
              </Stack>
            </Section>

            <Section id="display" title="Badges, avatars, alerts">
              <Stack label="Badges">
                <TBadge>Accent</TBadge>
                <TBadge tone="neutral">Neutral</TBadge>
                <TBadge tone="success">Success</TBadge>
                <TBadge tone="warning">Warning</TBadge>
                <TBadge tone="danger">Danger</TBadge>
              </Stack>
              <Stack label="Avatars">
                {["AK", "RM", "SN"].map((i) => (
                  <Avatar key={i} className="size-10 rounded-theme-pill themed-border">
                    <AvatarFallback className="rounded-theme-pill bg-surface-2 text-xs font-semibold text-fg">
                      {i}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <Avatar className="size-10 rounded-theme-pill themed-border">
                  <AvatarFallback className="rounded-theme-pill bg-accent text-accent-fg">
                    <User className="size-4" />
                  </AvatarFallback>
                </Avatar>
              </Stack>
              <Stack label="Alerts">
                <div className="w-full min-w-[280px] space-y-3">
                  <div className="flex gap-3 rounded-theme themed-border bg-surface-2 p-4">
                    <Bell className="mt-0.5 size-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-fg">Theme applied</p>
                      <p className="text-xs text-fg-muted">
                        All surfaces now read from the {style.name} token file.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-theme p-4 themed-border [border-color:var(--danger)] bg-surface-2">
                    <Trash2 className="mt-0.5 size-4 shrink-0 text-danger" />
                    <div>
                      <p className="text-sm font-semibold text-danger">Destructive action</p>
                      <p className="text-xs text-fg-muted">This cannot be undone.</p>
                    </div>
                  </div>
                </div>
              </Stack>
              <Stack label="Card">
                <TCard className="w-64 p-5">
                  <p className="font-display text-base text-fg">Card title</p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Surface, border, radius and shadow all come from tokens.
                  </p>
                  <TButton size="sm" variant="outline" className="mt-4">
                    Action
                  </TButton>
                </TCard>
              </Stack>
            </Section>

            <Section id="overlays" title="Overlays">
              <Stack label="Dialog">
                <Dialog>
                  <DialogTrigger asChild>
                    <TButton variant="outline">Open dialog</TButton>
                  </DialogTrigger>
                  <DialogContent className={cn(panel, "sm:max-w-md")}>
                    <DialogHeader>
                      <DialogTitle className="font-display text-fg">Publish theme</DialogTitle>
                      <DialogDescription className="text-fg-muted">
                        This pushes the {style.name} tokens to every consuming project.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="gap-2">
                      <TButton variant="ghost">Cancel</TButton>
                      <TButton>Publish</TButton>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </Stack>
              <Stack label="Drawer">
                <Drawer>
                  <DrawerTrigger asChild>
                    <TButton variant="outline">Open drawer</TButton>
                  </DrawerTrigger>
                  <DrawerContent className={cn(panel, "border-b-0")}>
                    <DrawerHeader>
                      <DrawerTitle className="font-display text-fg">Token inspector</DrawerTitle>
                      <DrawerDescription className="text-fg-muted">
                        Slide-up panel inheriting surface and border tokens.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 pb-8">
                      <TButton className="w-full justify-center">Close</TButton>
                    </div>
                  </DrawerContent>
                </Drawer>
              </Stack>
              <Stack label="Dropdown">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <TButton variant="secondary">
                      Menu <ChevronDown className="size-4" />
                    </TButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className={panel} align="start">
                    <DropdownMenuLabel className="label-caps text-fg-muted">Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-line" />
                    <DropdownMenuItem className={item}>Profile</DropdownMenuItem>
                    <DropdownMenuItem className={item}>Billing</DropdownMenuItem>
                    <DropdownMenuItem className={item}>Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Stack>
              <Stack label="Tooltip">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <TButton variant="ghost">Hover me</TButton>
                  </TooltipTrigger>
                  <TooltipContent
                    className={cn(panel, "px-3 py-1.5 text-xs [&_svg]:hidden")}
                  >
                    Themed tooltip
                  </TooltipContent>
                </Tooltip>
              </Stack>
              <Stack label="Toast">
                <TButton
                  variant="outline"
                  onClick={() =>
                    toast("Theme saved", {
                      description: `${style.name} tokens written to disk.`,
                    })
                  }
                >
                  Trigger toast
                </TButton>
              </Stack>
              <Stack label="Command palette">
                <TButton variant="secondary" onClick={() => setCommandOpen((o) => !o)}>
                  <Search className="size-4" /> {commandOpen ? "Hide" : "Show"} palette
                </TButton>
                {commandOpen && (
                  <Command className={cn(panel, "w-full min-w-[280px] overflow-hidden")}>
                    <CommandInput
                      placeholder="Search components…"
                      className="text-fg placeholder:text-fg-muted"
                    />
                    <CommandList>
                      <CommandEmpty className="py-6 text-center text-sm text-fg-muted">
                        No results.
                      </CommandEmpty>
                      <CommandGroup heading="Navigation" className="[&_[cmdk-group-heading]]:text-fg-muted">
                        <CommandItem className={item}>
                          <Home className="size-4" /> Landing page
                        </CommandItem>
                        <CommandItem className={item}>
                          <Settings className="size-4" /> Tokens
                        </CommandItem>
                        <CommandItem className={item}>
                          <User className="size-4" /> Account
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                )}
              </Stack>
            </Section>

            <Section id="navigation" title="Navigation">
              <Stack label="Tabs">
                <Tabs defaultValue="one" className="w-full min-w-[300px]">
                  <TabsList className="rounded-theme bg-surface-2 p-1 themed-border">
                    {["one", "two", "three"].map((t) => (
                      <TabsTrigger
                        key={t}
                        value={t}
                        className="rounded-theme-sm text-fg-muted data-[state=active]:bg-accent data-[state=active]:text-accent-fg"
                      >
                        Tab {t}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {["one", "two", "three"].map((t) => (
                    <TabsContent key={t} value={t} className="pt-4 text-sm text-fg-muted">
                      Panel content for tab {t}.
                    </TabsContent>
                  ))}
                </Tabs>
              </Stack>
              <Stack label="Accordion">
                <Accordion type="single" collapsible className="w-full min-w-[300px]">
                  {["Tokens", "Themes", "Extraction"].map((a) => (
                    <AccordionItem
                      key={a}
                      value={a}
                      className="border-b-[length:var(--border-width)] border-b-line"
                    >
                      <AccordionTrigger className="text-fg hover:no-underline">{a}</AccordionTrigger>
                      <AccordionContent className="text-sm text-fg-muted">
                        {a} are defined once per theme file and consumed everywhere.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Stack>
              <Stack label="Breadcrumb">
                <nav className="flex items-center gap-2 text-sm text-fg-muted">
                  <a href="#" className="hover:text-fg">
                    Styles
                  </a>
                  <span>/</span>
                  <a href="#" className="hover:text-fg">
                    {style.name}
                  </a>
                  <span>/</span>
                  <span className="text-fg">Components</span>
                </nav>
              </Stack>
              <Stack label="Pagination">
                <div className="flex items-center gap-1">
                  <TButton size="sm" variant="ghost" onClick={() => setPage((p) => Math.max(1, p - 1))}>
                    Prev
                  </TButton>
                  {[1, 2, 3, 4].map((p) => (
                    <TButton
                      key={p}
                      size="sm"
                      variant={p === page ? "primary" : "outline"}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </TButton>
                  ))}
                  <TButton size="sm" variant="ghost" onClick={() => setPage((p) => Math.min(4, p + 1))}>
                    Next
                  </TButton>
                </div>
              </Stack>
            </Section>

            <Section id="feedback" title="Feedback & loading">
              <Stack label="Progress">
                <div className="w-56 space-y-3">
                  <Progress
                    value={progress}
                    className="h-2 rounded-theme-pill bg-surface-2 [&>div]:bg-accent"
                  />
                  <div className="flex gap-2">
                    <TButton size="sm" variant="outline" onClick={() => setProgress((p) => Math.max(0, p - 15))}>
                      −
                    </TButton>
                    <TButton size="sm" variant="outline" onClick={() => setProgress((p) => Math.min(100, p + 15))}>
                      +
                    </TButton>
                  </div>
                </div>
              </Stack>
              <Stack label="Skeleton">
                <div className="w-56 space-y-2">
                  <div className="h-4 w-full animate-pulse rounded-theme-sm bg-surface-2" />
                  <div className="h-4 w-4/5 animate-pulse rounded-theme-sm bg-surface-2" />
                  <div className="h-4 w-2/3 animate-pulse rounded-theme-sm bg-surface-2" />
                </div>
              </Stack>
            </Section>

            <Section id="data" title="Data">
              <Stack label="Calendar">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className={cn(
                    "rounded-theme bg-surface-2 p-3 themed-border text-fg",
                    "[--cell-size:2rem]",
                    "[&_.rdp-day_button:hover]:bg-surface",
                    "[&_[data-selected-single=true]]:bg-accent [&_[data-selected-single=true]]:text-accent-fg",
                  )}
                />
              </Stack>
              <Stack label="Table">
                <div className="w-full min-w-[320px] overflow-hidden rounded-theme themed-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-surface-2">
                      <tr>
                        {["Token", "Value", "Scope"].map((h) => (
                          <th key={h} className="label-caps px-4 py-2.5 text-fg-muted">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["--accent", style.swatch[2], "global"],
                        ["--surface", style.swatch[1], "panel"],
                        ["--bg", style.swatch[0], "page"],
                      ].map(([a, b, c]) => (
                        <tr
                          key={a}
                          className="border-t-[length:var(--border-width)] border-t-line hover:bg-surface-2"
                        >
                          <td className="px-4 py-2.5 font-code text-xs text-fg">{a}</td>
                          <td className="px-4 py-2.5 font-code text-xs text-fg-muted">{b}</td>
                          <td className="px-4 py-2.5 text-fg-muted">{c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Stack>
            </Section>
          </div>
        </div>

        <div className="h-24" />
      </div>
    </TooltipProvider>
  );
}
