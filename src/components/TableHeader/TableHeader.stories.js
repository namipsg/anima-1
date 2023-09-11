import { TableHeader } from ".";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
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
