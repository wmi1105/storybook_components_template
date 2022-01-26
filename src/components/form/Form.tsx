/* 
https://codesandbox.io/s/react-hook-form-with-ui-library-ts-forked-qjgkx?file=/src/index.tsx
https://react-hook-form.com/api/useform/formstate
*/

import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { IForm } from "./form_types";

export function Form({ option, onSubmit, render }: IForm) {
  let formDefaultValue: { [key: string]: string } = {}; //array to object
  option.forEach((opt) => {
    const temp = { [opt.name]: opt.defaultValue };
    formDefaultValue = { ...formDefaultValue, ...temp };
  });

  const { control, reset, handleSubmit, getValues, watch, formState } = useForm(
    {
      mode: "onChange", //버튼 쓸거면 onSubmit 으로
      reValidateMode: "onChange",
      defaultValues: formDefaultValue,
      shouldFocusError: true,
    }
  );

  //   const handleSubmit: <{
  //     [key: string]: string;
  // }>(onValid: SubmitHandler<{
  //     [key: string]: string;
  // }>, onInvalid?: SubmitErrorHandler<{
  //     [key: string]: string;
  // }> | undefined) => (e?: BaseSyntheticEvent<...> | undefined) => Promise<...>

  const onSubmitHandler = (e: FormEvent) => {
    handleSubmit((event) => onSubmit(event, formState.isValid))(e).catch(
      (event) => console.log("catch", event)
    );
    // .finally(() => setRefresh((prev) => prev + 1));
  };

  const childJSX = render(control);

  return <form onSubmit={onSubmitHandler}>{childJSX}</form>;
}
