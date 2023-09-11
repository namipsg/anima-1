import { Navigation } from ".";

export default {
  title: "Components/Navigation",
  component: Navigation,
  argTypes: {
    property1: {
      options: ["navigation-tablet", "navigation-desktop", "navigation-mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "navigation-tablet",
    className: {},
  },
};
