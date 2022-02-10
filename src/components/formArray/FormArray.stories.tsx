import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormArray } from "./FormArray";

export default {
  title: `Components/FormArray`,
  component: FormArray,
} as ComponentMeta<typeof FormArray>;

const Template: ComponentStory<typeof FormArray> = (args) => <FormArray />;

export const Default = Template.bind({});
Default.args = {};
