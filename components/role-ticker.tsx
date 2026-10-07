'use client'

import { useEffect, useState } from 'react'

const roles = [
  'RPA bots that clear your spreadsheets',
  'AI pipelines that write your content',
  'API integrations that connect your tools',
  'Websites that turn visitors into leads',
]

/** Types out and erases a rotating list of what Muhannad builds. */
export function RoleTicker() {
  const [i, setI] = useState(0)
  const [text, setText] = useState(roles[0])
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced) return
    let n = 0
    let dir: 1 | -1 = 1
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const full = roles[i]
      n += dir
      setText(full.slice(0, n))
      if (dir === 1 && n === full.length) {
        dir = -1
        timer = setTimeout(tick, 1600)
      } else if (dir === -1 && n === 0) {
        setI((v) => (v + 1) % roles.length)
        return
      } else {
        timer = setTimeout(tick, dir === 1 ? 45 : 22)
      }
    }
    setText('')
    timer = setTimeout(tick, 250)
    return () => clearTimeout(timer)
  }, [i, reduced])

  return (
    <p
      className="mt-6 h-7 font-mono text-sm text-foreground md:text-base"
      aria-label={roles.join(', ')}
    >
      <span className="text-primary">&gt; </span>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="animate-caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-primary" />
    </p>
  )
}
