import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";
import { FormItem } from "./FormItem";

export default {
  title: `components/FormItem`,
  component: FormItem,
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => {
  return (
    <FormItem>
      <Input
        label="제목"
        styleTheme={INPUT_STYLE_THEME.BOTTOMLINE}
        lineTheme={INPUT_LINE_THEME.HORIZONTAL}
        value={""}
        onChange={() => console.log("")}
      />
    </FormItem>
  );
};

export const Default = Template.bind({});
Default.args = {};

//form안에 요소가 2개 이상일 떄
