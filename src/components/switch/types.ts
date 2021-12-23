export enum SWITCH_SIZE {
  W100 = "W100",
  W80 = "W80",
  W50 = "W50",
  W30 = "W30",
}

export enum SWITCH_ACTIVE_COLOR {
  GRAY = "#959595",
  BLUE = "#222df2",
  RED = "#f22222",
  ORANGE = "#f2b722",
  GREEN = "#22f271",
  YELLOW = "#f2d522",
}

export interface ISwitch {
  id: string;
  size: SWITCH_SIZE;
  color: SWITCH_ACTIVE_COLOR;
  isDisabled: boolean;
  isChecked: boolean;
  onSwitch: (value: boolean) => void;
}
