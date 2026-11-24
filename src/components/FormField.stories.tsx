import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    defaultValue: { control: "text" },
    error: { control: "text" },
    disabled: {
      control: "boolean",
      description: "Вимкнене поле. Помилка в такому полі не показується.",
    },
    type: { control: "select", options: ["text", "email", "tel"] },
  },
  args: {
    label: "Ім'я",
    placeholder: "Як до вас звертатися",
    defaultValue: "",
    error: "",
    disabled: false,
    type: "text",
  },
  render: (args) => <FormField key={String(args.defaultValue)} {...args} />,
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
