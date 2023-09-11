import { HeadlineSubhead } from ".";

export default {
  title: "Components/HeadlineSubhead",
  component: HeadlineSubhead,
  argTypes: {
    screen: {
      options: ["desktop", "tablet", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    screen: "desktop",
    className: {},
  },
};
