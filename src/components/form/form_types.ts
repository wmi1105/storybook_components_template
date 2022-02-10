import {
  Control,
  MultipleFieldErrors,
  RegisterOptions,
  UseControllerReturn,
  UseFormReturn,
  UseFormSetError,
} from 'react-hook-form';

export interface IFormOption {
  name: string;
  defaultValue: string;
  isRequired: boolean;
  rules: IFormRules;
  message: {
    success?: string;
    error?: MultipleFieldErrors;
    default?: string;
  };
}

export interface IForm extends Pick<UseFormReturn, 'handleSubmit'> {
  children: JSX.Element | JSX.Element[];
}

export enum RENDER_STATE {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface IFormItem {
  name: string;
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

export interface IRenderState {
  renderState: RENDER_STATE;
}

export type IFormRules = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

export type IFormField = UseControllerReturn['field'] &
  UseControllerReturn['fieldState'] &
  IRenderState;

export interface ISetError {
  setError: UseFormSetError<{
    [key: string]: string;
  }>;
}
