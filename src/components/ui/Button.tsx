import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'
type Size = 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-blue text-white shadow-sm shadow-brand-blue/20 hover:bg-brand-blue-dark hover:shadow-md hover:shadow-brand-blue/25',
  secondary:
    'bg-white text-brand-dark border border-slate-200 hover:border-brand-blue/40 hover:bg-brand-blue-light',
  ghost: 'text-brand-dark hover:bg-brand-blue-light',
  white: 'bg-white text-brand-dark hover:bg-white/90 shadow-sm',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button({
  variant = 'primary',
  size = 'md',
  icon = true,
  children,
  className = '',
  href,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon && (
          <ArrowRight
            size={size === 'lg' ? 18 : 16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        )}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon && (
        <ArrowRight
          size={size === 'lg' ? 18 : 16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </button>
  )
}
