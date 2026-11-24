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
};

const linkBase =
  "block rounded-control px-4 py-2 font-sans text-button outline-offset-2 " +
  "focus-visible:outline-2 focus-visible:outline-ink";

const linkDefault = "text-ink-muted hover:bg-accent-soft hover:text-ink";
const linkActive = "bg-accent text-canvas hover:bg-ink";

export function Navigation({
  items,
  active,
  label = "Основна навігація",
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
    <nav aria-label={label} className="relative font-sans">
      <div ref={toggleRef} className="md:hidden">
        <Button
          variant="secondary"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Закрити" : "Меню"}
        </Button>
      </div>

      <ul
        id={menuId}
        className={`${open ? "flex" : "hidden"} flex-col gap-2 md:flex md:flex-row max-md:absolute max-md:inset-x-0 max-md:top-full max-md:z-10 max-md:mt-2 max-md:rounded-card max-md:border max-md:border-line max-md:bg-canvas max-md:p-4`}
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
