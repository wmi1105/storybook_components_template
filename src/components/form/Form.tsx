/* 
https://codesandbox.io/s/react-hook-form-with-ui-library-ts-forked-qjgkx?file=/src/index.tsx
https://react-hook-form.com/api/useform/formstate
*/

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormItem } from "./FormItem";
import { IForm, IFromItemState } from "./form_types";

export function Form({ children, options, onFormState }: IForm) {
  const childArray = Array.isArray(children) ? children : [children];
  const [state, setState] = useState<IFromItemState[]>(
    options.map((opt) => ({
      name: opt.name,
      state: false,
      value: opt.defaultValue,
    }))
  );

  let formDefaultValue: { [key: string]: string } = {};
  options.forEach(({ name, defaultValue }) => {
    const temp = { [name]: defaultValue };
    formDefaultValue = { ...formDefaultValue, ...temp };
  });

  const { handleSubmit, control, reset, formState, watch } = useForm({
    mode: "onChange", //버튼 쓸거면 onSubmit 으로
    reValidateMode: "onChange",
    defaultValues: formDefaultValue,
    shouldFocusError: true,
  });

  const pushStateHandler = (param: IFromItemState) => {
    setState((prev) =>
      prev.map((obj) => {
        return obj.name === param.name ? param : obj;
      })
    );
  };

  useEffect(() => {
    if (state) onFormState(state);
  }, [state]);

  return (
    <form>
      {childArray.map((child, idx) => {
        const name = child.props.name;
        const option = options.filter((opt) => opt.name === name)[0];
        return (
          <FormItem
            key={idx}
            option={option}
            child={child}
            control={control}
            onItemState={pushStateHandler}
          />
        );
      })}
    </form>
  );
}
