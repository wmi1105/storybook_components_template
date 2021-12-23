export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

// export interface IValidOption<T> {
//   value: T;
//     label?: string | null;
//   showMessage?: string | null;
//   validation?: (value: T) => string | null;
//   isRequired?: boolean;
//   isDirty?: boolean;
//   isError?: boolean;
//   defaultError?: string | null;
//   defaultSuccess?: string | null;
// }

export interface IValidOption<T> {
  value: T;
  isError?: boolean;
  defaultType?: "ERROR" | "SUCCESS";
  defaultMessage?: string | null;
  validation?: (value: T) => string | null;
  errorMessage?: string | null;
}
