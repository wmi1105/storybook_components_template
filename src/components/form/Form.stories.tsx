import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";
import { Form } from "./Form";
import { formOption } from "./form.data";
import { FormItem } from "./FormItem";
import { IFormField, IFormOption } from "./form_types";
import { useFormHooks } from "./useFormHooks";
import { Control } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { Button } from "../button";

export default {
  title: `Components/Form`,
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => {
  // const { control, handleSubmit, getValue } = useFormHooks(formOption);

  const onSubmit = (data: unknown, isValid: boolean) => {
    console.log("submit");
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        option={formOption}
        render={(control) => (
          <>
            <FormItem
              option={formOption[0]}
              control={control}
              // onItemState={(e: any) => console.log(e)}
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
              // onItemState={(e: any) => console.log(e)}
              render={({ value, onChange }: IFormField) => (
                <Input
                  onChange={onChange}
                  value={value}
                  styleTheme={INPUT_STYLE_THEME.DEFAULT}
                  lineTheme={INPUT_LINE_THEME.HORIZONTAL}
                />
              )}
            />
            <button type="submit" onClick={() => null} />
          </>
        )}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const UseHook = () => {
  const { reset, watch, setFormItem, isValid, render, onSubmit } =
    useFormHooks(formOption);

  const onClickHandler = () => {
    onSubmit();
  };

  const item = (control: Control) => (
    <>
      <FormItem
        option={formOption[0]}
        control={control}
        // onItemState={(e: any) => console.log(e)}
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
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => (
          <Input
            onChange={onChange}
            value={value}
            styleTheme={INPUT_STYLE_THEME.DEFAULT}
            lineTheme={INPUT_LINE_THEME.HORIZONTAL}
          />
        )}
      />

      <Button label="submit" onClick={onClickHandler} />
    </>
  );

  useEffect(() => {
    setFormItem((control) => item(control));
  }, []);

  return render;
};
