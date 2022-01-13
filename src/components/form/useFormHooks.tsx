import { useForm } from "react-hook-form";
import { IFormOption } from "./form_types";

export function useFormHooks(option: IFormOption[]) {
  let formDefaultValue: { [key: string]: string } = {};
  option.forEach((opt) => {
    const temp = { [opt.name]: opt.defaultValue };
    formDefaultValue = { ...formDefaultValue, ...temp };
  });

  const { control, reset, handleSubmit, getValues, watch } = useForm({
    mode: "onChange", //버튼 쓸거면 onSubmit 으로
    reValidateMode: "onChange",
    defaultValues: formDefaultValue,
    shouldFocusError: true,
  });

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

  return {
    control,
    reset,
    handleSubmit,
  };
}
