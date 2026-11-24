@AGENTS.md

# Проєкт і стек

Сайт-портфоліо Taisiia Perekos (Web & Mobile UI/UX Designer) на власній дизайн-системі. Перший екран зібраний у `src/app/page.tsx` лише з компонентів і токенів.

- Next.js (App Router), TypeScript, Tailwind CSS.
- Storybook (`@storybook/nextjs-vite`) показує токени й компоненти окремо від сайту.
- Компоненти лежать у `src/components`, картинки в `src/assets`, шрифт у `src/app/fonts.ts`.

# Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт, тому перед пушем питай мене.

# Кольори

Усі токени оголошені в `@theme` у `src/app/globals.css`. Стандартні палітра, розміри тексту й радіуси Tailwind скинуті, тож існують лише токени. Назви за роллю, не за значенням. Класи: `bg-*`, `text-*`, `border-*`.

- `canvas`: фон сторінки, текст на `accent` (`bg-canvas`, `text-canvas`).
- `surface`: підкладка полів і карток, заливка вимкнених елементів (`bg-surface`).
- `line`: декоративні лінії й межі карток, роздільники (`border-line`).
- `accent`: головний акцент: основна кнопка, активний пункт, крапки, виділене слово (`bg-accent`, `text-accent`).
- `accent-soft`: світла підкладка під акцентом, фон hover і кнопки `soft` (`bg-accent-soft`).
- `ink`: основний текст і контур фокуса (`text-ink`, `outline-ink`).
- `ink-muted`: другорядний текст, межі полів і кнопки `secondary` (`text-ink-muted`, `border-ink-muted`).
- `danger`: помилка, текст і межа поля (`text-danger`, `border-danger`).

# Типографіка

- Шрифт `font-sans`: Inter (`next/font`, latin і cyrillic), запасні Helvetica Neue, Arial, sans-serif.
- Розміри `text-*` (висота рядка вбудована): `caption`, `body`, `button` (жирність 600), `lead`, `heading`, `display` (трекінг −0.03em, жирність 700). Приклад: `text-lead`.
- `tracking-logo` (−0.1em): лише для «T.» у логотипі шапки.

# Відступи, радіуси й пропорції

- Відступи окремих токенів не мають: лише кроки Tailwind 2, 3, 4, 6, 8 (8, 12, 16, 24, 32 px), напр. `p-4`, `gap-6`.
- Радіуси: `rounded-control` (кнопки, поля, 9999px), `rounded-card` (картки, 16px).
- Пропорції картинок: `aspect-hero` (1/1), `aspect-cover` (4/3); стандартні `aspect-*` Tailwind збережені.
- Токени розкладки, лише для сторінок: `max-w-page` (1280px), `*-section` (160px, напр. `py-section`), `w-figure` (42%, блок фігури першого екрана), `max-w-lead` (28rem, абзац першого екрана).

# Компоненти

Кожен має історію `Components/<Назва>` і docs `<Назва>.mdx` поруч у `src/components`.

- `Button`: кнопка. Варіанти `primary`, `secondary` (межа `ink-muted`), `soft` (на `accent-soft`); розміри `md`, `lg`; стани default, hover, focus, disabled. Вимкнена через `aria-disabled`, пояснення під нею: проп `disabledReason`.
- `FormField`: текстове поле з підписом над ним (`label`). Типи `text`, `email`, `tel`; стани default, hover, focus, заповнене, помилка, disabled. Помилка: проп `error` (текст `danger`, іконка, межа `danger`).
- `Navigation`: пункти меню (`items` з `label` і `href`, `active` з `href`, `menuLabel`, `closeLabel`). Активний пункт: `accent` з підкресленням, `aria-current="page"`. На вузькому екрані меню в кнопці, відкрите лежить поверх контенту й закривається Escape; батько має бути `relative`.
- `LanguageSwitcher`: перемикач мов (`languages` з `code` і `label`, `defaultValue`, `onChange`). Вибрана мова на `accent` (`aria-pressed`), решта `ink-muted`.
- `LabelList`: рядок коротких міток із крапкою `accent` між ними (`items`). Не інтерактивний.

# Правила

- Кольори, розміри тексту, радіуси й пропорції картинок тільки з токенів. Нові кольори не додавати.
- Класи, яких немає в `@theme` (`text-white`, `bg-black`, `text-sm`, `rounded-md`), не використовувати: вони мовчки не працюють.
- Відступи в компонентах лише з кроків 8, 12, 16, 24, 32 px (числа 2, 3, 4, 6, 8 у класах). Токени розкладки (`max-w-page`, `*-section`, `w-figure`, `max-w-lead`) лише на сторінках.
- Довільні значення в квадратних дужках (`p-[13px]`, `h-[150px]`, `text-[#...]`) заборонені.
- Прийняті стандартні класи Tailwind, окремих токенів не створюємо й не змінюємо: жирність (`font-normal`, `font-semibold`, `font-bold`), товщини (`border-2`, `outline-2`, `outline-offset-2`, `underline-offset-4`), hover-анімація (`motion-safe:hover:scale-105`, `motion-safe:transition-transform`, лише через `motion-safe`).
- Готові компоненти використовувати замість нових. Бракує елемента: перелічити, чого бракує, і спитати мене.
- Кожен інтерактивний елемент має стани default, hover, focus і disabled; поле форми ще й помилку.
- Вимкнена кнопка через `aria-disabled` з поясненням (`disabledReason`).
- Картинки лежать у `src/assets` і імпортуються (`import img from "@/assets/..."`), не з `public/`.
- Після змін у компоненті оновлювати його історію й документацію в Storybook. У docs без чисел (hex, px, контраст): назви токенів.
- Після змін у `@theme` перезапускати `npm run dev`, інакше нові класи не зʼявляться.
- Тексти сторінок брати з макета, посилання на ще не існуючі сторінки робити якорями на секції (`#cases`), щоб не було 404.

# Посилання

- План сайту: `plan.html` (у корені проєкту).
- Storybook: `npm run storybook`, адреса `http://localhost:6006` (токени на сторінці `Foundations/Tokens`).
