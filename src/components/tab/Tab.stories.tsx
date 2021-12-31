import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tab } from "./Tab";

export default {
  title: `Components/Tab`,
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab />;

export const Default = Template.bind({});
Default.args = {};
