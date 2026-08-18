import { type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'

const inputClasses =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-muted/70 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15'

interface FieldWrapperProps {
  label: string
  htmlFor: string
  required?: boolean
}

function FieldLabel({ label, htmlFor, required }: FieldWrapperProps) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-brand-dark">
      {label}
      {required && <span className="ml-0.5 text-brand-green">*</span>}
    </label>
  )
}

type InputFieldProps = FieldWrapperProps & InputHTMLAttributes<HTMLInputElement>

export function InputField({ label, htmlFor, required, ...rest }: InputFieldProps) {
  return (
    <div>
      <FieldLabel label={label} htmlFor={htmlFor} required={required} />
      <input id={htmlFor} name={htmlFor} required={required} className={inputClasses} {...rest} />
    </div>
  )
}

type TextareaFieldProps = FieldWrapperProps & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextareaField({ label, htmlFor, required, ...rest }: TextareaFieldProps) {
  return (
    <div>
      <FieldLabel label={label} htmlFor={htmlFor} required={required} />
      <textarea
        id={htmlFor}
        name={htmlFor}
        required={required}
        className={`${inputClasses} resize-none`}
        {...rest}
      />
    </div>
  )
}

type SelectFieldProps = FieldWrapperProps &
  SelectHTMLAttributes<HTMLSelectElement> & { options: string[]; placeholder?: string }

export function SelectField({ label, htmlFor, required, options, placeholder, ...rest }: SelectFieldProps) {
  return (
    <div>
      <FieldLabel label={label} htmlFor={htmlFor} required={required} />
      <select id={htmlFor} name={htmlFor} required={required} className={inputClasses} {...rest}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
