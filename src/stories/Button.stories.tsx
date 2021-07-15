import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";


import {Button} from "../ui/components";

export default {
	title: "Example/Button",
	component: Button,
	argTypes: {
		backgroundColor: {control: "color"},
	},
} as ComponentMeta<typeof Button>;


// add 
const Template: ComponentStory<typeof Button> = (props) =>
	<Button {...props} onClick={() => console.log("wat") }/>;


export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Button",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Button",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Button",
};

export const Custom = Template.bind({});
Custom.args = {
	size: "large",
	label: "Sumshit",
};