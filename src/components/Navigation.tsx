"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "./Button";

type NavigationItem = {
  /** Текст пункту меню. */
  label: string;
  /** Адреса, куди веде пункт. */
  href: string;
};

type NavigationProps = {
  /** Пункти меню в порядку показу. */
  items: NavigationItem[];
  /** Адреса (`href`) активного пункту, тобто поточної сторінки. Не задано: активного пункту немає. */
  active?: string;
  /** Підпис навігації для скрінрідерів. */
  label?: string;
  /** Текст кнопки на вузькому екрані, коли меню закрите. */
  menuLabel?: string;
  /** Текст кнопки на вузькому екрані, коли меню відкрите. */
  closeLabel?: string;
};

// On narrow screens a link is a full-width row (py-4, no rounding); from 768 px it is a pill.
const linkBase =
  "block rounded-none px-4 py-4 font-sans text-lead outline-offset-2 max-md:-outline-offset-2 " +
  "md:rounded-control md:py-2 focus-visible:outline-2 focus-visible:outline-ink";

const linkDefault = "text-ink hover:bg-accent-soft";
const linkActive =
  "text-accent underline underline-offset-4 hover:bg-accent-soft";

export function Navigation({
  items,
  active,
  label = "Основна навігація",
  menuLabel = "Меню",
  closeLabel = "Закрити",
}: NavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLDivElement>(null);

  // Escape закриває відкрите меню й повертає фокус на кнопку.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.querySelector("button")?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav aria-label={label} className="font-sans">
      <div ref={toggleRef} className="md:hidden">
        <Button
          variant="secondary"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? closeLabel : menuLabel}
        </Button>
      </div>

      <ul
        id={menuId}
        className={`${open ? "flex" : "hidden"} flex-col md:flex md:flex-row md:gap-2 max-md:absolute max-md:inset-x-0 max-md:top-full max-md:z-20 max-md:mt-2 max-md:divide-y max-md:divide-line max-md:overflow-hidden max-md:rounded-card max-md:border max-md:border-line max-md:bg-canvas`}
      >
        {items.map((item) => {
          const isActive = item.href === active;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`${linkBase} ${isActive ? linkActive : linkDefault}`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
