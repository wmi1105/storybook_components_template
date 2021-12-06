import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { IInput, INPUT_THEME } from "./types";

export function Input({ label, theme, placeholder, value, onChange }: IInput) {
  const inputStyles = inputTheme[theme];

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputWrapper inputStyles={inputStyles}>
      {label && <LabelStyles>{label}</LabelStyles>}
      <InputStyled
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder ? placeholder : ""}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div<{ inputStyles: SerializedStyles }>`
  ${({ inputStyles }) => inputStyles}
  padding: 5px;
  display: flex;
  justify-content: left;
`;

const InputStyled = styled.input`
  font-size: 15px;
  background: none;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  :focus {
    outline: none;
  }
`;

const LabelStyles = styled.label`
  min-width: 80px;
  text-align: center;
`;

const inputTheme = {
  [INPUT_THEME.DEFAULT]: css`
    background-color: #dbdbdb;
  `,
  [INPUT_THEME.OUTLINE]: css`
    border: 1px solid blue;
  `,
  [INPUT_THEME.BOTTOMLINE]: css`
    border-bottom: 1px solid blue;
  `,
};
