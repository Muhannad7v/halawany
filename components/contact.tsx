'use client'

import { useState } from 'react'
import { Check, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Let&apos;s talk
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Book a free automation audit
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Tell me one task that eats your time. On a quick call I&apos;ll
              show you exactly how it could run automatically — no pressure, no
              jargon.
            </p>
            <a
              href="mailto:hello@halawany.dev"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              hello@halawany.dev
            </a>
          </div>

          {sent ? (
            <div className="flex flex-col items-start justify-center rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-5 w-5" />
              </span>
              <p className="mt-4 font-medium text-foreground">Thanks — got it!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                I&apos;ll get back to you within one business day to schedule
                your audit.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-3"
            >
              <input
                required
                type="text"
                placeholder="Your name"
                aria-label="Your name"
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
              <textarea
                rows={3}
                placeholder="What task would you love to automate?"
                aria-label="What task would you love to automate?"
                className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
              <Button type="submit" size="lg" className="w-full group">
                Request my free audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">
            M
          </span>
          <span className="font-mono text-sm text-foreground">
            Muhannad El Halawany
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          AI Automation Developer &amp; Web Designer · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
