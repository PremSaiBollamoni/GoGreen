import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

const fieldStyles =
  'w-full border-b border-line bg-transparent py-3 font-body text-base outline-none transition-colors placeholder:text-graphite/35 focus:border-forest';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function TextField({ label, error, id, className, ...props }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="spec-label">
        {label}
      </label>
      <input id={id} className={cn(fieldStyles, 'mt-2', className)} {...props} />
      {error && <p className="mt-1.5 text-xs text-red-700">{error}</p>}
    </div>
  );
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function TextAreaField({ label, error, id, className, ...props }: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="spec-label">
        {label}
      </label>
      <textarea id={id} className={cn(fieldStyles, 'mt-2 resize-none', className)} {...props} />
      {error && <p className="mt-1.5 text-xs text-red-700">{error}</p>}
    </div>
  );
}
