import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TuiCalendar } from "./TuiCalendar";

export default {
  title: `Components/Calendar`,
  component: TuiCalendar,
} as ComponentMeta<typeof TuiCalendar>;

const Template: ComponentStory<typeof TuiCalendar> = (args) => <TuiCalendar />;

export const Default = Template.bind({});
Default.args = {};
