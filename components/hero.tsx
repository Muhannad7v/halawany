import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RoleTicker } from '@/components/role-ticker'

const metrics = [
  { value: 'RPA', label: 'Excel, OCR & database bots' },
  { value: 'AI', label: 'prompt-to-content pipelines' },
  { value: 'Web', label: 'interactive front-ends' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6"
    >
      {/* drifting colour orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="animate-drift absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-chart-violet/15 blur-3xl [animation-delay:-7s]" />
      </div>

      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 80%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI Automation Developer &amp; Web Designer
          </div>

          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}>
            I build AI systems that handle your busywork{' '}
            <span className="animate-shimmer bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
              so your team can focus on customers.
            </span>
          </h1>

          <RoleTicker />

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            From RPA bots and AI content pipelines to API integrations and fast,
            interactive websites — I connect the tools you already use into
            systems that run themselves.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="group"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              Book a free automation audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#demo" />}
            >
              Try the live demo
            </Button>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 sm:gap-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {m.value}
                </dd>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo spot — replace this file to update the profile image */}
        <div className="order-first flex justify-center lg:order-none lg:justify-end">
          <div className="relative motion-safe:animate-float">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative aspect-square w-56 overflow-hidden rounded-2xl border border-border bg-secondary/40 ring-1 ring-primary/30 sm:w-72 lg:w-full lg:max-w-sm">
              <img
                src="/images/muhannad.jpeg"
                alt="Muhannad El Halawany, AI Automation Developer and Web Designer"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/60 bg-primary px-5 py-2 font-sans text-sm font-semibold tracking-tight text-primary-foreground shadow-[0_8px_24px_rgba(0,0,0,0.3),0_0_18px_color-mix(in_oklab,var(--primary)_55%,transparent),0_0_34px_color-mix(in_oklab,var(--primary)_22%,transparent)] backdrop-blur">
              Muhannad El Halawany
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
