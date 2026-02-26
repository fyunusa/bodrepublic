import { Link, type LinkProps } from 'react-router-dom'

import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-b from-fuchsia-500 to-fuchsia-600 text-white shadow-[0_18px_45px_-25px_rgba(219,39,119,0.7)] hover:from-fuchsia-500 hover:to-fuchsia-500',
  secondary:
    'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 border border-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

export type LinkButtonProps = LinkProps & {
  variant?: Variant
  size?: Size
  className?: string
}

export function LinkButton({
  className,
  variant = 'secondary',
  size = 'md',
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        'no-underline inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}

