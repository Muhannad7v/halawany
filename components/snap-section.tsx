import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SnapSectionProps = {
  children: ReactNode
  className?: string
  /** Disable the reveal wrapper (e.g. for above-the-fold content that manages its own motion). */
  animate?: boolean
}

/**
 * Full-viewport section that snaps to the top of the screen while scrolling.
 * min-h-screen (not fixed h-screen) so sections taller than the viewport can
 * still scroll internally instead of clipping content.
 */
export function SnapSection({ children, className, animate = true }: SnapSectionProps) {
  return (
    <div
      className={cn(
        'snap-start scroll-mt-16 flex min-h-[100svh] w-full flex-col justify-center py-20',
        className,
      )}
    >
      {animate ? <Reveal>{children}</Reveal> : children}
    </div>
  )
}
