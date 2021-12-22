import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";
import { InputForm } from "./InputForm";

export default {
  title: `components/InputForm`,
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => {
  return (
    <InputForm>
      <Input
        label="제목"
        styleTheme={INPUT_STYLE_THEME.DEFAULT}
        lineTheme={INPUT_LINE_THEME.HORIZONTAL}
        value={""}
        onChange={() => console.log("")}
      />
    </InputForm>
  );
};

export const Default = Template.bind({});
Default.args = {};
