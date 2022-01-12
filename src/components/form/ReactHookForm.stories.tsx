import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";
import { Form } from "./Form";
import { IFormOption } from "./ReactHookForm_types";
import { ReactHookForm } from "./ReactHookForm";

export default {
  title: `Components/ReactHookForm`,
  component: ReactHookForm,
} as ComponentMeta<typeof ReactHookForm>;

const Template: ComponentStory<typeof ReactHookForm> = (args) => (
  <ReactHookForm />
);

export const Default = Template.bind({});
Default.args = {};
