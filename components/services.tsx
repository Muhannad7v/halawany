import { Bot, Workflow, MessagesSquare, LineChart, Globe, Gauge, Search, Plug } from 'lucide-react'

const pillars = [
  {
    tag: '01 — AI Automation',
    title: 'Systems that run themselves',
    description:
      'I connect your tools into reliable workflows that capture leads, answer customers, and move data — without anyone lifting a finger.',
    items: [
      { icon: Workflow, label: 'RPA bots for Excel, OCR & data entry' },
      { icon: Bot, label: 'AI content & prompt-to-output pipelines' },
      { icon: LineChart, label: 'Automated reports & dashboards' },
      { icon: Plug, label: 'REST API integrations (no SDKs required)' },
    ],
  },
  {
    tag: '02 — Web Design',
    title: 'Websites built to convert',
    description:
      'Fast, modern, mobile-first sites designed around one goal: turning visitors into booked calls and paying customers.',
    items: [
      { icon: Globe, label: 'Landing pages & business sites' },
      { icon: Gauge, label: 'Performance & Core Web Vitals' },
      { icon: MessagesSquare, label: 'Booking & lead-capture forms' },
      { icon: Search, label: 'On-page SEO foundations' },
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            What I do
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Two ways I help your business grow
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Most clients start with one and add the other. Automation saves the
            hours; the website brings in the work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                {p.tag}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-6 space-y-3">
                {p.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
