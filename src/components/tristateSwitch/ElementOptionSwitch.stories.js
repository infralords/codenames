import { ElementOptionSwitch } from ".";

export default {
  title: "Components/ElementOptionSwitch",
  component: ElementOptionSwitch,
  argTypes: {
    stateProp: {
      options: ["team-a", "off", "team-b", "off-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "team-a",
  },
};
