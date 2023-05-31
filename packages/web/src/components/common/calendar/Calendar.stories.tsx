import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Calendar from "./Calendar";

export default {
  title: "common/Calendar",
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = args => (
  <Calendar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
