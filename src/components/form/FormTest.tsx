import { formOption } from "./form.data";
import { useFormHooks } from "./useFormHooks";
import { Control } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { Button } from "../button";
import { FormItem } from "./FormItem";
import { IFormField } from "@src/components/form/form_types";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";

export function FormTest() {
  const { reset, watch, setFormItem, isValid, render, onSubmit } =
    useFormHooks(formOption);

  const onClickHandler = () => {
    onSubmit();
  };

  const item = (control: Control) => (
    <>
      <FormItem
        name="text1"
        option={formOption[0]}
        control={control}
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => (
          <Input
            value={value}
            onChange={onChange}
            styleTheme={INPUT_STYLE_THEME.DEFAULT}
            lineTheme={INPUT_LINE_THEME.VERTICAL}
          />
        )}
      />

      <FormItem
        name="text2"
        option={formOption[1]}
        control={control}
        // onItemState={(e: any) => console.log(e)}
        render={({ value, onChange }: IFormField) => (
          <Input
            value={value}
            onChange={onChange}
            styleTheme={INPUT_STYLE_THEME.DEFAULT}
            lineTheme={INPUT_LINE_THEME.VERTICAL}
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
}
