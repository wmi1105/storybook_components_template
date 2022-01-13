import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";
import { Form } from "./Form";
import { FormItem } from "./FormItem";
import { IFormField, IFormOption } from "./form_types";
import { useFormHooks } from "./useFormHooks";

export default {
  title: `Components/Form`,
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => {
  const formOption: IFormOption[] = [
    {
      name: "text1",
      defaultValue: "",
      isRequired: true,
      rules: { maxLength: 10 },
      message: {
        success: "맞음",
        error: "오류있음",
      },
    },
    {
      name: "text2",
      defaultValue: "",
      isRequired: true,
      rules: { maxLength: 10 },
      message: {
        success: "맞음",
        error: "오류있음",
      },
    },
  ];

  const { control, handleSubmit } = useFormHooks(formOption);

  return (
    <Form handleSubmit={handleSubmit}>
      <FormItem
        option={formOption[0]}
        control={control}
        onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => (
          <Input
            onChange={onChange}
            value={value}
            styleTheme={INPUT_STYLE_THEME.DEFAULT}
            lineTheme={INPUT_LINE_THEME.HORIZONTAL}
          />
        )}
      />

      <FormItem
        option={formOption[1]}
        control={control}
        onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => (
          <Input
            onChange={onChange}
            value={value}
            styleTheme={INPUT_STYLE_THEME.DEFAULT}
            lineTheme={INPUT_LINE_THEME.HORIZONTAL}
          />
        )}
      />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};
