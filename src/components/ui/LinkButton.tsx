import { Link, type LinkProps } from 'react-router-dom'

import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-b from-fuchsia-400 to-fuchsia-500 text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_20px_50px_-25px_rgba(217,70,239,0.65)] hover:from-fuchsia-300 hover:to-fuchsia-500',
  secondary:
    'bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-white/15',
  ghost:
    'bg-transparent text-white/90 hover:bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
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
        'no-underline inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}

