"use client";

import { useState } from "react";

type Language = {
  /** Код мови, за ним визначається вибрана мова (наприклад, `en`). */
  code: string;
  /** Текст на кнопці (наприклад, `EN`). */
  label: string;
};

type LanguageSwitcherProps = {
  /** Доступні мови в порядку показу. */
  languages: Language[];
  /** Код мови, вибраної на початку. Не задано: вибрана перша. */
  defaultValue?: string;
  /** Викликається з кодом мови, коли відвідувач вибрав іншу. */
  onChange?: (code: string) => void;
  /** Підпис групи для скрінрідерів. */
  label?: string;
};

const buttonBase =
  "rounded-control px-4 py-2 font-sans text-button outline-offset-2 " +
  "focus-visible:outline-2 focus-visible:outline-ink";

const buttonDefault =
  "font-normal text-ink-muted hover:bg-accent-soft hover:text-ink";
const buttonSelected = "bg-accent text-canvas hover:bg-ink";

export function LanguageSwitcher({
  languages,
  defaultValue,
  onChange,
  label = "Language",
}: LanguageSwitcherProps) {
  const [value, setValue] = useState(defaultValue ?? languages[0]?.code);

  return (
    <div role="group" aria-label={label} className="flex items-center gap-2">
      {languages.map((language) => {
        const selected = language.code === value;
        return (
          <button
            key={language.code}
            type="button"
            lang={language.code}
            aria-pressed={selected}
            onClick={() => {
              setValue(language.code);
              onChange?.(language.code);
            }}
            className={`${buttonBase} ${selected ? buttonSelected : buttonDefault}`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
