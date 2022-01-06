export interface IToastDP {
  useTime: boolean;
  onChange: (val: string) => void;
  defaultDate?: Date;
}

export interface IToastDTP {
  useTime: boolean;
  onChange: (param: { start: string; end: string }) => void;
  defaultDate?: {
    start: Date;
    end: Date;
  };
}
