export enum SELECT_THEME {
  DEFAULT = "DEFAULT",
  POPUP = "POPUP",
}

export interface IPropTypes {
  theme: SELECT_THEME;
  optionData: { value: string; text: string }[];
  selected: number;
  onChange: (idx: number) => void;
}
