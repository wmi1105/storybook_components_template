import {
  Control,
  RegisterOptions,
  UseControllerReturn,
  UseFormReturn,
} from "react-hook-form";

export interface IFormOption {
  name: string;
  defaultValue: string;
  isRequired: boolean;
  rules: IFormRules;
  message: {
    success: string;
    error: string;
    default?: string;
  };
}

export interface IForm {
  option: IFormOption[];
  onSubmit: (data: unknown, isValid: boolean) => void;
  render: (control: Control) => JSX.Element | JSX.Element[];
  ref?: HTMLFormElement;
}
export interface IFormItem {
  option: IFormOption;
  control: Control;
  onItemState?: (param: IFromItemState) => void;
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
