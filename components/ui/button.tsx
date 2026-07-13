import { cn } from '@/lib/utils'
import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  asChild?: boolean
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2'

export function Button({
  className,
  variant = 'primary',
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-sky-600 text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-600',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
  }

  const classes = cn(baseClasses, variantClasses[variant], className)

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
      className: cn(classes, (children.props as React.HTMLAttributes<HTMLElement>).className),
      ...props,
    } as React.HTMLAttributes<HTMLElement>)
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
