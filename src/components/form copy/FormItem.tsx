import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { createElement, useEffect } from "react";
import { useController } from "react-hook-form";
import { IFormItem } from "./form_types";

export function FormItem({
  option,
  control,
  onItemState,
  render,
  displayMsg,
}: IFormItem) {
  const { field, fieldState, formState } = useController({
    name: option.name,
    rules: { ...option.rules, required: option.isRequired },
    control,
  });

  const { onChange, onBlur, name, value, ref } = field;
  const { invalid, isTouched, isDirty, error } = fieldState;
  const { touchedFields, dirtyFields } = formState;

  useEffect(() => {
    onItemState({
      name: option.name,
      state: isDirty && !error ? true : false,
      value: value,
    });
  }, [value, isDirty, error]);

  const child = render(field);

  return (
    <FormItemStyled>
      {child}
      <div>
        {displayMsg && (
          <>
            {isDirty && error && (
              <ErrorMessage>{option.message.error}</ErrorMessage>
            )}
            {isDirty && !error && (
              <SucMessage>{option.message.success}</SucMessage>
            )}
            {option.message.default && (
              <DefaultMessage>{option.message.default}</DefaultMessage>
            )}
          </>
        )}
      </div>
    </FormItemStyled>
  );
}

FormItem.defaultProps = {
  displayMsg: true,
};

const FormItemStyled = styled.div`
  > div {
    min-height: 20px;
  }
`;

const ErrorMessage = styled.span`
  color: #e00;
`;
const SucMessage = styled.span`
  color: #0ee;
`;

const DefaultMessage = styled.span``;
