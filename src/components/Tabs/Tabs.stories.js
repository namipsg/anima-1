import { Tabs } from ".";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    property1: {
      options: ["tab-2", "tab-1", "tab-4", "tab-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "tab-2",
    className: {},
    tabStateInactiveClassName: {},
    tabDivClassName: {},
    tabText: "Today",
    tabStateInactiveClassNameOverride: {},
    tabDivClassNameOverride: {},
    tabText1: "This Week",
    tabStateHoverClassName: {},
    tabDivClassName1: {},
    tabText2: "This Month",
    tabStateHoverClassNameOverride: {},
    tabDivClassName2: {},
  },
};
