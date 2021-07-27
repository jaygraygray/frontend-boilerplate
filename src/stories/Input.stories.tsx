import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "../ui/components";

export default {
  title: "Input",
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = props => <Input {...props} />;

export const Primary = Template.bind({});
