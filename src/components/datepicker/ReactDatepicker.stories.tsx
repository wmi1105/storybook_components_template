import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactDatepicker } from "./ReactDatepicker";

export default {
  title: `Components/ReactDatepicker`,
  component: ReactDatepicker,
} as ComponentMeta<typeof ReactDatepicker>;

const Template: ComponentStory<typeof ReactDatepicker> = (args) => (
  <ReactDatepicker />
);

export const Default = Template.bind({});
Default.args = {};
