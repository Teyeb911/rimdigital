interface IconProps {
  size?: number
  className?: string
}

export function LinkedinIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.63c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  )
}

export function FacebookIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 9h2.5V6H14c-2.1 0-3.5 1.4-3.5 3.5V11H8v3h2.5v7h3v-7h2.6l.4-3h-3v-1.4c0-.6.3-1.1 1.5-1.1Z" />
    </svg>
  )
}

export function XIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 3h4.4l4 5.6L16.9 3H20l-6.3 8.2L20.4 21H16l-4.4-6.1L6.6 21H3.4l6.7-8.6L4 3Z" />
    </svg>
  )
}
