import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: `Components/Checkbox`,
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "check1",
  label: "동의",
  value: false,
  onChange: (id: string, val: boolean) => console.log(id, val),
};

export const Checked = Template.bind({});
Checked.args = {
  id: "check2",
  label: "동의",
  value: true,
  onChange: (id: string, val: boolean) => console.log(id, val),
};
