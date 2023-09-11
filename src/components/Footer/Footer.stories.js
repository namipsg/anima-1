import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
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
    footerInfoClassName: {},
    NFTMarketplace:
      "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/nft-marketplace-1.svg",
    frameClassName: {},
    divider:
      "https://cdn.animaapp.com/projects/62975db08ae6b4ad16b0e408/releases/64fefeced977b32f06dd2869/img/divider-1.svg",
  },
};
