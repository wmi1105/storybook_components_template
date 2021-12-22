import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { INPUT_STYLE_THEME } from ".";
import { Input } from "./Input";

export default {
  title: `components/Input`,
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (val: string) => {
    setInputValue(val);
  };

  return (
    <div>
      {/* value : {inputValue}
      <div> */}
      <Input {...args} value={inputValue} onChange={onChangeHandler} />
      {/* </div> */}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  styleTheme: INPUT_STYLE_THEME.DEFAULT,
  placeholder: "내용을 입력해 주세요",
};

export const WidthLabel = Template.bind({});
WidthLabel.args = {
  label: "제목",
  styleTheme: INPUT_STYLE_THEME.OUTLINE,
  placeholder: "제목을 입력해 주세요",
};
