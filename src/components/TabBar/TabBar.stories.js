import { TabBar } from ".";

export default {
  title: "Components/TabBar",
  component: TabBar,
  argTypes: {
    screen: {
      options: ["desktop", "tablet", "mobile"],
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
