import { Tab } from ".";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    stateProp: {
      options: ["inactive", "active", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    number: "302",
    text: "Created",
    stateProp: "inactive",
    className: {},
    divClassName: {},
    hasFrame: true,
  },
};
