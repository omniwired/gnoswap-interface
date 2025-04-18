import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StakingHeader from "./StakingHeader";

export default {
  title: "pool/StakingHeader",
  component: StakingHeader,
} as ComponentMeta<typeof StakingHeader>;

const Template: ComponentStory<typeof StakingHeader> = args => (
  <StakingHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
