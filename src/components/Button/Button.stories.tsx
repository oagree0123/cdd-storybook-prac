import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    primary: "secondary",
    children: "Secondary",
  },
};

export const Outlined: Story = {
  args: {
    primary: "outlined",
    children: "Outlined",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small",
  },
};
