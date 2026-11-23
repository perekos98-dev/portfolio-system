import type { Preview } from '@storybook/nextjs-vite';
import { inter } from '../src/app/fonts';
import '../src/app/globals.css';

// next/font gives the font variable as a class that the site puts on <html>.
// Storybook has no layout, so we add the same class here (also for docs pages).
if (typeof document !== 'undefined') {
  document.documentElement.classList.add(inter.variable);
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${inter.variable} font-sans text-ink`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
