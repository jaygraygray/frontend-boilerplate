import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../ui/components";

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

// add
const Template: ComponentStory<typeof Button> = props => (
  <Button {...props} onClick={() => console.log("wat")} />
);

export const Primary = Template.bind({});
Primary.args = {
  actionType: "primary",
  outline: false,
  label: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  actionType: "secondary",
  outline: false,
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  actionType: "info",
  outline: true,
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  actionType: "warning",
  outline: false,
  size: "small",
  label: "Button"
};

export const Custom = Template.bind({});
Custom.args = {
  actionType: "",
  outline: "",
  size: "large",
  label: "Sumshit"
};
