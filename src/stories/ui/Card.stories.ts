import Card, { CardVariants } from "../../components/ui/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Card,
  args: {
    title: "Title",
    description: "Description",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Review: Story = {
  args: {
    title: "Primary Button",
  },
};
export const Category: Story = {
  args: {
    variant: CardVariants.CATEGORY,
  },
};
