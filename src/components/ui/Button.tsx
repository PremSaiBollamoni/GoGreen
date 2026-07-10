import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  showArrow?: boolean;
  children: ReactNode;
}

const VARIANT_STYLES: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-forest text-mist hover:bg-deepest',
  outline: 'border border-graphite/25 text-graphite hover:border-graphite',
  ghost: 'text-graphite hover:text-forest',
};

export function Button({
  variant = 'primary',
  showArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'group inline-flex items-center gap-2 px-6 py-3 font-display text-sm font-medium tracking-tight transition-colors duration-300',
        VARIANT_STYLES[variant],
        className,
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </button>
  );
}
