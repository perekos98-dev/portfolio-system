import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LanguageSwitcher } from "./LanguageSwitcher";

const languages = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UA" },
  { code: "es", label: "ES" },
];

const meta = {
  title: "Components/LanguageSwitcher",
  component: LanguageSwitcher,
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["en", "uk", "es"],
      labels: { en: "EN", uk: "UA", es: "ES" },
    },
    languages: { control: false },
    onChange: { control: false },
    label: { control: "text" },
  },
  args: {
    languages,
    defaultValue: "en",
    label: "Language",
  },
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

// key перемальовує перемикач, коли в Controls змінюють мову за замовчуванням.
export const Playground: Story = {
  render: (args) => <LanguageSwitcher key={args.defaultValue} {...args} />,
};
