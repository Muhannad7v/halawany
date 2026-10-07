const stack = [
  'Python',
  'n8n',
  'OpenAI',
  'REST APIs',
  'UiPath',
  'RPA Development',
  'JavaScript',
  'Java',
  'C++',
  'SQL',
  'HTML / CSS',
]

export function TechAbout() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Hi, I&apos;m Muhannad El Halawany
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m an AI Automation Developer and Web Designer who helps
                small and medium businesses, agencies, and service providers
                stop doing repetitive work by hand. I build RPA bots, AI
                content pipelines, and API integrations that quietly run in the
                background — plus interactive websites that make brands look the
                part.
              </p>
              <p>
                Through the{' '}
                <span className="font-medium text-foreground">
                  Digital Egypt Pioneers Initiative (DEPI)
                </span>{' '}
                I built real, hands-on projects: a UiPath bot that automates
                Excel and OCR into a database, a Python + Gemini tool that turns
                weak prompts into finished content inside Google Workspace, and
                a luxury-car showcase site. I care less about trendy tools and
                more about the outcome: hours saved and customers served faster.
              </p>
            </div>

            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Who I work with
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'SMBs',
                'Marketing agencies',
                'E-commerce',
                'Real estate',
                'Education centers',
                'Clinics',
                'Freelancers',
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Tech stack
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-secondary px-3 py-1.5 font-mono text-sm text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Tools are just the means. Tell me the outcome you want and
                I&apos;ll pick the right ones to get there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
