import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const items = [
  { label: "Головна", href: "#home" },
  { label: "Роботи", href: "#projects" },
  { label: "Про мене", href: "#about" },
  { label: "Контакти", href: "#contact" },
];

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  // Відкрите меню позиціонується від найближчого батька з position: relative.
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
  parameters: {
    // У docs меню показується в рамці з висотою, щоб відкрите меню не обрізалось.
    docs: { story: { inline: false, iframeHeight: 360 } },
  },
  argTypes: {
    active: {
      control: {
        type: "select",
        labels: {
          "#home": "Головна",
          "#projects": "Роботи",
          "#about": "Про мене",
          "#contact": "Контакти",
        },
      },
      options: ["#home", "#projects", "#about", "#contact"],
    },
    items: { control: false },
    label: { control: "text" },
    menuLabel: { control: "text" },
    closeLabel: { control: "text" },
  },
  args: {
    items,
    active: "#projects",
    label: "Основна навігація",
    menuLabel: "Меню",
    closeLabel: "Закрити",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
