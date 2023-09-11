import { RankingsList } from ".";

export default {
  title: "Components/RankingsList",
  component: RankingsList,
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
