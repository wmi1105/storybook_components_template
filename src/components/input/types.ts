export enum INPUT_THEME {
  DEFAULT = "DEFAULT",
  OUTLINE = "OUTLINE",
  BOTTOMLINE = "BOTTOMLINE",
}

export interface IInput {
  label?: string;
  theme: INPUT_THEME;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}
