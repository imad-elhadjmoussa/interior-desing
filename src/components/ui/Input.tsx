import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  hint?: string
}

export function Input({
  className = '',
  hint,
  id,
  label,
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <label className="grid gap-2 font-body text-sm font-medium text-brand-charcoal" htmlFor={inputId}>
      <span>{label}</span>
      <input
        className={`min-h-12 rounded-brand border border-brand-warm-gray/40 bg-brand-off-white px-4 text-base font-normal text-brand-charcoal outline-none transition-shadow placeholder:text-brand-warm-gray focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/15 ${className}`}
        id={inputId}
        {...props}
      />
      {hint ? <span className="text-xs font-normal text-brand-warm-gray">{hint}</span> : null}
    </label>
  )
}
