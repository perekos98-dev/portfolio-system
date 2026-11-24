import { useId, type ButtonHTMLAttributes } from "react";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
  /** Вигляд кнопки: `primary` — на кольорі accent, `secondary` — без заливки, з межею, `soft` — на світлій підкладці accent-soft. */
  variant?: "primary" | "secondary" | "soft";
  /** Розмір: `md` — звичайний, `lg` — великий. */
  size?: "md" | "lg";
  /** Вимкнена кнопка. Лишається у фокусі (aria-disabled), клік не спрацьовує. */
  disabled?: boolean;
  /** Пояснення під вимкненою кнопкою, чому вона недоступна. Зв'язане через aria-describedby. */
  disabledReason?: string;
};

const base =
  "inline-flex items-center justify-center rounded-control border-2 font-sans " +
  "outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink";

const sizes = {
  md: "px-6 py-3 text-button",
  lg: "px-8 py-4 text-lead font-semibold",
};

const variants = {
  primary: "border-accent bg-accent text-canvas hover:border-ink hover:bg-ink",
  secondary:
    "border-ink-muted text-ink hover:bg-accent-soft",
  soft: "border-accent-soft bg-accent-soft text-ink hover:border-ink",
};

const disabledStyle =
  "cursor-not-allowed border-surface bg-surface text-ink-muted";

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  disabledReason,
  className = "",
  onClick,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const reasonId = useId();
  const hasReason = disabled && Boolean(disabledReason);

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        {...rest}
        type={type}
        aria-disabled={disabled || undefined}
        aria-describedby={hasReason ? reasonId : rest["aria-describedby"]}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        className={`${base} ${sizes[size]} ${
          disabled ? disabledStyle : variants[variant]
        } ${className}`}
      >
        {children}
      </button>
      {hasReason && (
        <p id={reasonId} className="text-caption text-ink-muted">
          {disabledReason}
        </p>
      )}
    </div>
  );
}
