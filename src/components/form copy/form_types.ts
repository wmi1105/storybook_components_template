import {
  Control,
  FieldValue,
  FieldValues,
  RegisterOptions,
  UseControllerReturn,
  UseFormReturn,
} from "react-hook-form";

export interface IDefaultValue {
  [key: string]: string;
}

export interface IFormOption {
  name: string;
  defaultValue: string | IDefaultValue[];
  isRequired: boolean;
  rules: IFormRules;
  message: {
    success: string;
    error: string;
    default?: string;
  };
}

export interface IControlValues {
  [key: string]: string | IDefaultValue[];
}

export interface IForm extends Pick<UseFormReturn, "handleSubmit"> {
  children: JSX.Element | JSX.Element[];
}
export interface IFormItem {
  option: IFormOption;
  control: Control<FieldValues>;
  onItemState: (param: IFromItemState) => void;
  render: (field: IFormField) => JSX.Element;
  displayMsg: boolean;
}

export interface IFromItemState {
  name: string;
  state: boolean;
  value: string;
}

export type IFormRules = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

export type IFormField = Pick<UseControllerReturn, "field">["field"];
