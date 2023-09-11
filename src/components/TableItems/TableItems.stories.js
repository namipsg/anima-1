import { TableItems } from ".";

export default {
  title: "Components/TableItems",
  component: TableItems,
  argTypes: {
    screen: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    nftsSold: "602",
    rank: "1",
    change: "+1.41%",
    volume: "12.4 ETH",
    screen: "desktop",
    artistCardArtistName: "Dish Studio",
    divClassName: {},
    className: {},
  },
};
