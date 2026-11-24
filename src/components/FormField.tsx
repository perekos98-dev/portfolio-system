import { useId, type InputHTMLAttributes } from "react";

type FormFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "type"
> & {
  /** Підпис поля. Завжди стоїть над полем. */
  label: string;
  /** Текст помилки. Якщо задано, поле в стані помилки: межа `danger`, іконка й текст під полем. */
  error?: string;
  /** Тип поля: текст, пошта, телефон. */
  type?: "text" | "email" | "tel";
};

const fieldBase =
  "w-full rounded-control border-2 px-6 py-3 font-sans text-body text-ink " +
  "placeholder:text-ink-muted outline-offset-2 focus:outline-2 focus:outline-ink";

const fieldDefault =
  "border-ink-muted bg-canvas hover:border-ink not-placeholder-shown:border-ink";

const fieldError = "border-danger bg-canvas";

const fieldDisabled =
  "cursor-not-allowed border-surface bg-surface text-ink-muted";

export function FormField({
  label,
  error,
  type = "text",
  disabled = false,
  placeholder = " ", // потрібен, щоб відрізняти «заповнене» від порожнього
  className = "",
  ...rest
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasError = Boolean(error) && !disabled;

  return (
    <div className={`flex w-full flex-col items-start gap-2 ${className}`}>
      <label htmlFor={id} className="text-caption font-semibold text-ink">
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : rest["aria-describedby"]}
        className={`${fieldBase} ${
          disabled ? fieldDisabled : hasError ? fieldError : fieldDefault
        }`}
      />
      {hasError && (
        <p
          id={errorId}
          className="text-caption text-danger"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="me-2 inline-block size-4 align-text-bottom"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 7v6M12 17h.01" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
