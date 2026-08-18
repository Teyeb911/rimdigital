interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
  showWordmark?: boolean
}

/**
 * Brand mark inspired by the RIM Digital logo: two interlocking rounded
 * rings in blue and green, echoing the connected "R/D" monogram.
 */
export default function Logo({ variant = 'dark', className = '', showWordmark = true }: LogoProps) {
  const rimColor = variant === 'dark' ? '#00B45A' : '#ffffff'
  const digitalColor = variant === 'dark' ? '#173042' : '#ffffff'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="8" stroke="#168CC8" strokeWidth="5" />
        <rect x="16" y="16" width="20" height="20" rx="8" stroke="#00B45A" strokeWidth="5" />
      </svg>
      {showWordmark && (
        <span className="font-heading text-xl font-bold leading-none tracking-tight">
          <span style={{ color: rimColor }}>RIM</span>{' '}
          <span style={{ color: digitalColor }}>Digital</span>
        </span>
      )}
    </span>
  )
}
