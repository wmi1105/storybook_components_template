import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";
import { Form } from "./Form";
import { IFormOption } from "./form_types";
import { ReactHookForm } from "./ReactHookForm";

export default {
  title: `Components/ReactHookForm`,
  component: ReactHookForm,
} as ComponentMeta<typeof ReactHookForm>;

const Template: ComponentStory<typeof ReactHookForm> = (args) => {
  const formOption: IFormOption[] = [
    {
      name: "text1",
      defaultValue: "",
      isRequired: true,
      rules: { maxLength: 10 },
      errorMessage: "오류있음",
    },
    {
      name: "text2",
      defaultValue: "",
      isRequired: true,
      rules: { maxLength: 10 },
      errorMessage: "오류있음",
    },
  ];

  return (
    <Form options={formOption} onFormState={(e) => console.log(e)}>
      <Input
        name="text1"
        onChange={() => null}
        value={""}
        styleTheme={INPUT_STYLE_THEME.DEFAULT}
        lineTheme={INPUT_LINE_THEME.HORIZONTAL}
      />
      <Input
        name="text2"
        onChange={() => null}
        value={""}
        styleTheme={INPUT_STYLE_THEME.DEFAULT}
        lineTheme={INPUT_LINE_THEME.HORIZONTAL}
      />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};
