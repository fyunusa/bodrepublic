import { Link, type LinkProps } from 'react-router-dom'

import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-500/30 active:bg-brand-700 dark:shadow-brand-500/40 dark:hover:shadow-brand-500/50',
  secondary:
    'bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:border-zinc-600',
  ghost:
    'bg-transparent text-zinc-700 hover:bg-zinc-100 border border-transparent dark:text-zinc-300 dark:hover:bg-zinc-800',
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
        'no-underline inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}
