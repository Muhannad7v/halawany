'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in ms before the entrance animation runs. */
  delay?: number
  /** Direction the element travels in from. */
  from?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

const hiddenByDirection: Record<NonNullable<RevealProps['from']>, string> = {
  up: 'opacity-0 translate-y-10',
  down: 'opacity-0 -translate-y-10',
  left: 'opacity-0 translate-x-10',
  right: 'opacity-0 -translate-x-10',
  scale: 'opacity-0 scale-95',
}

export function Reveal({ children, className, delay = 0, from = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none',
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hiddenByDirection[from],
        className,
      )}
    >
      {children}
    </div>
  )
}
