const steps = [
  {
    step: 'Audit',
    detail:
      'A free call to map your workflows and find the tasks eating the most time or money.',
  },
  {
    step: 'Build',
    detail:
      'I design and build the automation or website, keeping you in the loop with quick demos.',
  },
  {
    step: 'Automate',
    detail:
      'We connect it to your live tools, test edge cases, and switch it on with monitoring.',
  },
  {
    step: 'Handoff',
    detail:
      'You get clear documentation and support, so the system keeps running long after launch.',
  },
]

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-card/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            How we work together
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A simple, low-risk path to launch
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.step} className="rounded-2xl border border-border bg-background p-6">
              <span className="font-mono text-sm text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {s.step}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
