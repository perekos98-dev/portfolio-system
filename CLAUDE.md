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
- Лише для сторінок, не для компонентів: `max-w-page` (1280px), відступ між секціями `*-section` (160px, напр. `py-section`), `w-figure` (52,5%, ширина блоку фігури першого екрана) і `max-w-lead` (28rem, ширина абзацу першого екрана).
- Лише для логотипа в шапці: `tracking-logo` (−0.1em, міжлітерний проміжок між «T» і крапкою).
- Відступи окремих токенів не мають: лише кроки Tailwind 2, 3, 4, 6, 8 (8, 12, 16, 24, 32 px), напр. `p-4`.

# Компоненти

- `Button` (`src/components/Button.tsx`): кнопка. Варіанти `primary` (на `accent`, текст `canvas`, 5,6:1), `secondary` (межа `ink-muted`) і `soft` (на `accent-soft`, текст `ink`); розміри `md` і `lg`; стани default, hover, focus, disabled. Вимкнена через `aria-disabled`, пояснення під нею — проп `disabledReason` (зв'язане через `aria-describedby`). Історія `Components/Button`, docs у `Button.mdx`.
- `FormField` (`src/components/FormField.tsx`): текстове поле з підписом над ним (`label`). Типи `text`, `email`, `tel`; межа `ink-muted`, кути `rounded-control`; стани default, hover, focus, заповнене, помилка і disabled. Помилка — проп `error` (текст під полем кольору `danger`, іконка, межа `danger`, зв'язано через `aria-describedby`). Історія `Components/FormField`, docs у `FormField.mdx`.
- `Navigation` (`src/components/Navigation.tsx`): навігація, пункти меню сайту (`items` з `label` і `href`, активний пункт — проп `active` з `href`). Стани пункту: default, hover, focus (контур `ink`), активний (текст `accent` з підкресленням, без заливки, `aria-current="page"`). Від 768 px пункти в рядок; на вужчому екрані меню згорнуте в кнопку «Меню», відкрите меню лежить поверх контенту й закривається клавішею Escape. Історія `Components/Navigation`, docs у `Navigation.mdx`.
- `LanguageSwitcher` (`src/components/LanguageSwitcher.tsx`): перемикач мов, ряд кнопок, вибрана одна. Пропси `languages` (`code` і `label`), `defaultValue`, `onChange`, `label`. Вибрана мова на `accent` з текстом `canvas` (`aria-pressed`), решта `ink-muted`; стани default, hover, focus, вибрана. Історія `Components/LanguageSwitcher`, docs у `LanguageSwitcher.mdx`.
- `LabelList` (`src/components/LabelList.tsx`): рядок коротких міток із крапкою `accent` між сусідніми (`items`, `label`). Не інтерактивний. Історія `Components/LabelList`, docs у `LabelList.mdx`.

# Правила

- Жирність (`font-normal`, `font-semibold`, `font-bold`) і товщини ліній (`border-2`, `outline-2`, `outline-offset-2`, `underline-offset-4`) прийняті як стандартні класи Tailwind. Окремих токенів для них не створюємо, у коді їх не змінюємо.
- `scale` і `transition` для hover прийняті як стандартні класи Tailwind, поряд із жирністю й товщинами (напр. `motion-safe:hover:scale-105`, `motion-safe:transition-transform`). Анімацію вмикаємо лише через `motion-safe`.

Заповнимо далі.

# Посилання

- План сайту: `plan.html` (у корені проєкту)
