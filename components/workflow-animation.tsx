'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, Inbox, Sparkles, Workflow, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Step = {
  icon: LucideIcon
  label: string
  title: string
  body: string
  chips: string[]
}

const steps: Step[] = [
  {
    icon: Inbox,
    label: '01 · Trigger',
    title: 'Something happens',
    body: 'A lead fills a form, a customer asks about an order, a file lands in a folder.',
    chips: ['Form', 'Email', 'Excel', 'WhatsApp'],
  },
  {
    icon: Sparkles,
    label: '02 · Understand',
    title: 'AI reads and decides',
    body: 'An AI step understands the request, extracts the data and picks the right action.',
    chips: ['OpenAI', 'Gemini', 'OCR'],
  },
  {
    icon: Workflow,
    label: '03 · Automate',
    title: 'Bots do the work',
    body: 'RPA bots and API integrations update your tools: CRM, database, calendar, inbox.',
    chips: ['UiPath', 'n8n', 'Python', 'REST APIs'],
  },
  {
    icon: CheckCircle2,
    label: '04 · Result',
    title: 'Done, no human needed',
    body: 'The customer gets an instant reply and your team gets hours of their week back.',
    chips: ['Instant reply', 'Logged', 'Reported'],
  },
]

const STEP_MS = 2600

export function WorkflowAnimation() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), STEP_MS)
    return () => clearInterval(id)
  }, [paused])

  const current = steps[active]

  return (
    <section id="how" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">What I do</p>
        <h2 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          I turn repetitive work into systems that run themselves
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Every project follows the same flow. Watch a task travel from trigger to finished result,
          or click a stage to inspect it.
        </p>

        <div
          className="mt-12 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur md:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ol className="flex flex-col items-stretch lg:flex-row lg:items-center">
            {steps.map((s, i) => {
              const Icon = s.icon
              const isActive = i === active
              const done = i < active
              return (
                <li key={s.label} className="flex flex-col items-center lg:flex-1 lg:flex-row">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? 'step' : undefined}
                    className={cn(
                      'group flex w-full flex-row items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-500 lg:w-40 lg:flex-col lg:gap-3 lg:text-center',
                      isActive
                        ? 'scale-[1.04] border-primary/70 bg-primary/10'
                        : 'border-border bg-secondary/30 hover:border-primary/40',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-500',
                        isActive
                          ? 'animate-pulse-ring bg-primary text-primary-foreground'
                          : done
                            ? 'bg-primary/25 text-primary'
                            : 'bg-secondary text-muted-foreground',
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-foreground">
                        {s.title}
                      </span>
                    </span>
                  </button>

                  {i < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="relative h-10 w-px shrink-0 bg-border lg:h-px lg:w-auto lg:flex-1"
                    >
                      <div
                        className={cn(
                          'absolute inset-0 origin-top bg-primary transition-transform duration-700 lg:origin-left',
                          done || isActive ? 'scale-100' : 'scale-y-0 lg:scale-x-0 lg:scale-y-100',
                        )}
                      />
                      {isActive && (
                        <span className="animate-packet-y lg:animate-packet-x absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)] lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0" />
                      )}
                    </div>
                  )}
                </li>
              )
            })}
          </ol>

          <div
            key={active}
            className="mt-10 grid gap-4 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-2 duration-500 md:grid-cols-[1fr_auto] md:items-center"
            aria-live="polite"
          >
            <p className="max-w-2xl text-pretty text-foreground">{current.body}</p>
            <div className="flex flex-wrap gap-2">
              {current.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-lg bg-secondary px-3 py-1.5 font-mono text-xs text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 h-1 overflow-hidden rounded-full bg-secondary" aria-hidden="true">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
