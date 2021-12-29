import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputSocialNumber } from "./InputSocialNumber";

export default {
  title: `Components/InputSocialNumber`,
  component: InputSocialNumber,
} as ComponentMeta<typeof InputSocialNumber>;

const Template: ComponentStory<typeof InputSocialNumber> = (args) => {
  const onValueHandler = (val: string[]) => {
    console.log(val);
  };

  return <InputSocialNumber onValue={onValueHandler} />;
};

export const Default = Template.bind({});
Default.args = {};
