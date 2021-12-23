import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IValidOption } from "./types";
import { useFormItem } from "./useFormItem";

interface IPropTypes<T> {
  children: JSX.Element;
  // valid: IValidOption<T>;
}

export function FormItem<T>({ children }: IPropTypes<T>) {
  const obj = useFormItem();

  //input value
  //new value
  //state
  //error message
  //validation func
  //default type
  //default message

  return (
    <FormItemStyled>
      <ElementWrapper>{children}</ElementWrapper>
      <CaptionWrapper valid={true}>ok</CaptionWrapper>
    </FormItemStyled>
  );
}

const FormItemStyled = styled.div``;
const ElementWrapper = styled.div``;
const CaptionWrapper = styled.div<{ valid: boolean }>`
  padding: 3px 10px;
  ${({ valid }) => {
    if (valid) {
      return css`
        color: green;
      `;
    } else {
      return css`
        color: red;
      `;
    }
  }}
`;
