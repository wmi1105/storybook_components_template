import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToastDateRangePicker } from "./ToastDateRangePicker";

export default {
  title: `Components/ToastDateRangePicker`,
  component: ToastDateRangePicker,
} as ComponentMeta<typeof ToastDateRangePicker>;

const Template: ComponentStory<typeof ToastDateRangePicker> = (args) => (
  <ToastDateRangePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  useTime: false,
  onChange: (val) => console.log(val),
  defaultDate: { start: new Date("2021-01-06"), end: new Date("2021-01-05") },
};

export const DateTimeRange = Template.bind({});
DateTimeRange.args = {
  useTime: true,
  onChange: (val) => console.log(val),
};
