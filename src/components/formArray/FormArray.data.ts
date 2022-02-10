import { IFormOption } from "../form copy/form_types";

export const formArrayOption: IFormOption[] = [
  {
    name: "firstName",
    defaultValue: "",
    isRequired: true,
    rules: { maxLength: 5 },
    message: {
      success: "맞음",
      error: "오류있음",
    },
  },
  {
    name: "cart",
    defaultValue: [
      { name: "test", quantity: "1", price: "11" },
      { name: "", quantity: "2", price: "12" },
    ],
    isRequired: true,
    rules: { maxLength: 10 },
    message: {
      success: "맞음",
      error: "오류있음",
    },
  },
];
