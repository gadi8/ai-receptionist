import { clsx } from 'clsx';
import { forwardRef, type TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id ?? props.name;

    return (
      <div className="space-y-1">
        {label ? (
          <label htmlFor={textareaId} className="block text-sm font-medium text-slate-700">
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={textareaId}
          className={clsx(
            'w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200',
            error && 'border-red-300 focus:border-red-300 focus:ring-red-200',
            className
          )}
          {...props}
        />
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
