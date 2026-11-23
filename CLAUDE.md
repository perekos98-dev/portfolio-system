@AGENTS.md

# Стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS

# Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт, тому перед пушем питай мене.

# Токени

Усі токени оголошені в `@theme` у `src/app/globals.css`. Стандартні палітра, розміри тексту й радіуси Tailwind скинуті, тож існують лише ці назви. Назви — за роллю, не за значенням.

- Кольори (`bg-*`, `text-*`, `border-*`): `canvas`, `surface`, `line`, `accent`, `accent-soft`, `ink`, `ink-muted`, `danger`.
- Шрифт: `font-sans` (Inter через `next/font`, файл `src/app/fonts.ts`; запасні Helvetica Neue, Arial, sans-serif).
- Розміри тексту (`text-*`, висота рядка вбудована): `caption`, `body`, `button` (жирність 600), `lead`, `heading`, `display` (трекінг −0.03em, жирність 700).
- Радіуси: `rounded-control` (кнопки й поля, 9999px), `rounded-card` (картки, 16px).
- Пропорції картинок: `aspect-hero` (1/1), `aspect-cover` (4/3); стандартні `aspect-*` Tailwind збережені.
- Лише для сторінок, не для компонентів: `max-w-page` (1280px) і відступ між секціями `*-section` (160px, напр. `py-section`).
- Відступи окремих токенів не мають: лише кроки Tailwind 2, 3, 4, 6, 8 (8, 12, 16, 24, 32 px), напр. `p-4`.

# Компоненти

Заповнимо далі.

# Правила

Заповнимо далі.

# Посилання

- План сайту: `plan.html` (у корені проєкту)
