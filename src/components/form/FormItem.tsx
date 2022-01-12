import styled from "@emotion/styled";
import { createElement, useEffect } from "react";
import { useController } from "react-hook-form";
import { IFormItem } from "./form_types";

export function FormItem({ option, control, child, onItemState }: IFormItem) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: option.name,
    rules: { ...option.rules, required: option.isRequired },
    control,
  });

  useEffect(() => {
    onItemState({
      name: option.name,
      state: isDirty && !error ? true : false,
      value: value,
    });
  }, [value, isDirty, error]);

  return (
    <FormItemStyled>
      {createElement(child.type, {
        ...{
          ...child.props,
          value: value,
          onChange: onChange,
        },
      })}
      {isDirty && error && <span>{option.errorMessage}</span>}
      {!isDirty && <span>입력해주세요</span>}
    </FormItemStyled>
  );
}

const FormItemStyled = styled.div`
  padding: 10px 0;
  span {
    color: #e00;
  }
`;
