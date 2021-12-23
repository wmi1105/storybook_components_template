export enum RADIO_LINE_THEME {
  VERTICAL = "VERTICAL",
  HORIZONTAL = "HORIZONTAL",
}

interface IRadioItem {
  value: string;
  label: string;
}

export interface IRadio {
  id: string;
  items: IRadioItem[];
  checkValue: string;
  onChange: (id: string, value: string) => void;
  lineTheme: RADIO_LINE_THEME;
}
