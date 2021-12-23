export interface ICheckbox {
  id: string;
  label: string;
  value: boolean;
  onChange: (id: string, value: boolean) => void;
}
