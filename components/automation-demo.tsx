'use client'

import { useEffect, useRef, useState } from 'react'
import { Bot, Send, User, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Msg = { role: 'bot' | 'user'; text: string }

const suggestions = [
  'A lead just filled out my contact form',
  'A customer asks where their order is',
  'I need my weekly sales report',
]

// Rule-based demo of how an automation would respond — runs fully client-side.
function respond(input: string): string {
  const q = input.toLowerCase()
  if (/(lead|form|inquir|contact)/.test(q)) {
    return "Automation triggered: I've drafted a personalized reply, sent it by email + WhatsApp in under 30 seconds, logged the lead to your CRM, and booked a follow-up reminder. Response time: instant."
  }
  if (/(order|shipping|track|delivery|where)/.test(q)) {
    return "Support bot: I looked up the order via your store API, confirmed it ships tomorrow, and sent the tracking link. Ticket resolved automatically — no human needed."
  }
  if (/(report|sales|data|dashboard|excel|kpi)/.test(q)) {
    return "Reporting flow: I pulled this week's numbers from your spreadsheet, cleaned them, built a KPI summary, and emailed the dashboard to your team. That's ~6 hours of manual work, done in 0 clicks."
  }
  if (/(book|appointment|schedule|clinic|call)/.test(q)) {
    return "Booking flow: I offered your next 3 open slots, confirmed the appointment, added it to your calendar, and sent an automatic reminder 24 hours before."
  }
  return "Great use case. Typically I'd map this to a workflow: a trigger, an AI step to understand the request, then automated actions across your tools. Book a free audit and I'll design it for your exact setup."
}

export function AutomationDemo() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'bot',
      text: "Hi! I'm a live demo of the kind of assistant I build. Describe a task from your business and watch how automation would handle it.",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = (text: string) => {
    const clean = text.trim()
    if (!clean || typing) return
    setMessages((m) => [...m, { role: 'user', text: clean }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: respond(clean) }])
      setTyping(false)
    }, 900)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <section id="demo" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Show, don&apos;t tell
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              This portfolio does what I build
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Instead of screenshots, try it live. Type a real task from your
              business — a new lead, a support question, a report — and see how
              an automation would respond in seconds.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Understands the request with AI',
                'Takes action across your tools',
                'Runs 24/7 without extra headcount',
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                  <Zap className="h-4 w-4 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Automation Assistant</p>
                <p className="font-mono text-[11px] text-primary">online · demo</p>
              </div>
            </div>

            <div ref={scrollRef} className="h-80 space-y-4 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
                      m.role === 'bot'
                        ? 'bg-secondary text-primary'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {m.role === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </span>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === 'bot'
                        ? 'bg-secondary text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                    <Bot className="h-4 w-4" />
                  </span>
                  <div className="flex items-center gap-1 rounded-2xl bg-secondary px-4 py-3">
                    <Dot /> <Dot delay="150ms" /> <Dot delay="300ms" />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border p-3">
              <div className="mb-2 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Describe a task from your business…"
                  className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
                  aria-label="Describe a task"
                />
                <Button size="icon" onClick={() => send(input)} aria-label="Send">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Dot({ delay = '0ms' }: { delay?: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
      style={{ animationDelay: delay }}
    />
  )
}
