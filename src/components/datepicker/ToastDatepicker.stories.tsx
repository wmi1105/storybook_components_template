import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToastDatepicker } from "./ToastDatepicker";

export default {
  title: `Components/ToastDatepicker`,
  component: ToastDatepicker,
} as ComponentMeta<typeof ToastDatepicker>;

const Template: ComponentStory<typeof ToastDatepicker> = (args) => (
  <ToastDatepicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (val: string) => console.log(val),
};

export const DateTimePick = Template.bind({});
DateTimePick.args = {
  useTime: true,
  onChange: (val: string) => console.log(val),
};
