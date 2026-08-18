import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue-light px-4 py-2 text-sm font-semibold text-brand-blue ${className}`}
    >
      {children}
    </span>
  )
}
