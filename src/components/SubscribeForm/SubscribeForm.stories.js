import { SubscribeForm } from ".";

export default {
  title: "Components/SubscribeForm",
  component: SubscribeForm,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    email: "Enter your email here",
    property1: "default",
    buttonHasLeftIcon: true,
  },
};
