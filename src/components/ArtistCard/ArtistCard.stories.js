import { ArtistCard } from ".";

export default {
  title: "Components/ArtistCard",
  component: ArtistCard,
  argTypes: {
    property1: {
      options: ["horizontal-medium", "horizontal-big", "horizontal-small", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    rankingNumber2: true,
    additionalInfo: true,
    artistName: "Dish Studio",
    totalSales: "Total Sales:",
    rankingNumber: "1",
    salesNumber: "34.53 ETH",
    property1: "horizontal-medium",
    className: {},
    divClassName: {},
  },
};
