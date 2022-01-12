/* 
https://codesandbox.io/s/react-hook-form-with-ui-library-ts-forked-qjgkx?file=/src/index.tsx
https://react-hook-form.com/api/useform/formstate
*/

import { forEach } from "lodash";
import { createElement, useRef } from "react";
import { Controller, UseControllerProps, useForm } from "react-hook-form";
import { FormItem } from "../FormItem";
import { IForm } from "./form_types";

export function ReactHookForm({ children, options }: IForm) {
  const childArray = Array.isArray(children) ? children : [children];

  let formDefaultValue: { [key: string]: string } = {};
  options.forEach(({ name, defaultValue }) => {
    const temp = { [name]: defaultValue };
    formDefaultValue = { ...formDefaultValue, ...temp };
  });

  const { handleSubmit, control, reset, formState, watch } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: formDefaultValue,
  });

  const onSubmit = (data: any) => console.log(data);

  // console.group("formState");
  // console.log("isDirty", formState.isDirty); //사용자가 한번이라도 입력했으면 true
  // console.log("isSubmitted", formState.isSubmitted); //양식이 제출되었으면 true
  // // console.log("isSubmitSuccessful", formState.isSubmitSuccessful); //양식이 거부없이 성공적으로 제출되었거나 콜백 내에서 처리되었음.
  // // console.log("submitCount", formState.submitCount); //제출된 횟수
  // // console.log("isSubmitting", formState.isSubmitting); //양식이 현제 제출 중이면 true
  // console.log("isValid", formState.isValid); //양식에 오류가 없으면 true
  // console.log("isValidating", formState.isValidating); //유효성 검사 중이면 true
  // console.log("errors", formState.errors);
  console.log("watch", watch());
  // console.groupEnd();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {childArray.map((child, idx) => {
        return (
          <Controller
            key={idx}
            name={child.props.name}
            control={control}
            rules={{ maxLength: 10, required: true }}
            render={({ field: { onChange, onBlur, value, ref } }) =>
              createElement(child.type, {
                ...{
                  ...child.props,
                  value: value,
                  onChange: onChange,
                },
              })
            }
          />
        );
      })}

      {/* <Controller
        name="text"
        control={control}
        rules={{ maxLength: 10, required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            name=""
            onChange={onChange}
            value={value}
            styleTheme={INPUT_STYLE_THEME.DEFAULT}
            lineTheme={INPUT_LINE_THEME.HORIZONTAL}
          />
        )}
      /> */}

      <input type="submit" />
    </form>
  );
}
