'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ExternalLink, X } from 'lucide-react'

const projects = [
  {
    client: 'Excel & Data-Driven Businesses',
    title: 'Excel & OCR Automation Bot',
    problem:
      'Staff spent hours reading Excel files by hand, pulling task data, and re-keying it into the company database.',
    solution:
      'A UiPath RPA bot that extracts task data from Excel, processes it, reads documents with OCR, and syncs everything into the database — running end to end with no manual steps.',
    stack: ['UiPath', 'RPA', 'OCR', 'SQL'],
    result: 'fully automated in UiPath',
    metric: 'Excel + OCR',
    image: '/images/project-excel-ocr.png',
    link: 'https://www.uipath.com/product/rpa',
  },
  {
    client: 'Marketing & Digital Agencies',
    title: 'AI Prompt-to-Content Generator',
    problem:
      'Weak prompts produced weak output, and moving finished text and images into shared workspaces was slow and manual.',
    solution:
      'A Python tool that automatically rewrites weak prompts with Google Gemini, generates the text and images, and pushes them straight into Google Sheets and Google Drive via REST APIs — no SDKs required.',
    stack: ['Python', 'Gemini', 'REST APIs'],
    result: 'pure REST API integration',
    metric: 'No SDKs',
    image: '/images/project-ai-content.png',
    link: 'https://ai.google.dev/',
  },
  {
    client: 'E-commerce & Service Businesses',
    title: 'Luxury Cars Showcase Website',
    problem:
      'Premium brands need a site that feels as high-end as the products they sell.',
    solution:
      'An interactive front-end web application showcasing luxury cars and global brands, with smooth, responsive design built to impress visitors and hold their attention.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    result: 'interactive & responsive',
    metric: 'Front-end',
    image: '/images/project-luxury-cars.png',
    link: '#contact',
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="work" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Selected work
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Problems solved, hours saved
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every project is framed the way clients think about it: the problem,
            the system I built, and the result it delivered.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {projects.map((p) => (
            <article
              key={p.title}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${p.title}`}
              onClick={() => setSelectedProject(p)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedProject(p)
                }
              }}
              className="group grid cursor-pointer gap-6 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_16px_48px_hsl(var(--primary)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:grid-cols-[1fr_auto] md:items-center md:p-8"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {p.client}
                  </span>
                  <span className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                </div>
                <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {p.title}
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Problem. </span>
                  {p.problem}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Solution. </span>
                  {p.solution}
                </p>
              </div>

              <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center md:w-52">
                <p className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                  {p.metric}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{p.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative max-h-[90svh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-primary/30 bg-card shadow-2xl shadow-primary/10"
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background/80 p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} project preview`}
                className="aspect-square h-full w-full object-cover md:aspect-auto"
              />
              <div className="p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {selectedProject.client}
                </p>
                <h3 id="project-dialog-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {selectedProject.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">The challenge. </span>
                  {selectedProject.problem}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">The solution. </span>
                  {selectedProject.solution}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={selectedProject.link}
                  target={selectedProject.link.startsWith('http') ? '_blank' : undefined}
                  rel={selectedProject.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  View project reference
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
