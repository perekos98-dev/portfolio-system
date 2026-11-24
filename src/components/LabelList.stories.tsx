import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LabelList } from "./LabelList";

const meta = {
  title: "Components/LabelList",
  component: LabelList,
  argTypes: {
    items: { control: "object" },
    label: { control: "text" },
  },
  args: {
    items: ["WEBSITES", "WEB SERVICES", "MOBILE APPS"],
    label: "What I design",
  },
} satisfies Meta<typeof LabelList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
