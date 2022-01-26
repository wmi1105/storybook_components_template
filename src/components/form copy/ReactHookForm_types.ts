import { Control, RegisterOptions } from "react-hook-form";

export interface IFormOption {
  name: string;
  defaultValue: string;
  isRequired: boolean;
  rules: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  errorMessage: string;
}

export interface IForm {
  options: IFormOption[];
  children: JSX.Element | JSX.Element[];
  onFormState: (param: IFromItemState[]) => void;
}

export interface IFormItem {
  option: IFormOption;
  child: JSX.Element;
  control: Control;
  onItemState: (param: IFromItemState) => void;
}

export interface IFromItemState {
  name: string;
  state: boolean;
  value: string;
}
