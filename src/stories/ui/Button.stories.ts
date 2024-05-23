import Button, { ButtonVariants } from "../../components/ui/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Primary Button",
    variant: ButtonVariants.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    text: "Secondary Button",
    variant: ButtonVariants.SECONDARY,
  },
};
