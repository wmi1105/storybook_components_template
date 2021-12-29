import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { KeyboardEvent, useEffect } from "react";
import { IInputSocialNumber } from "./types";
import { useInputSocial } from "./useInputSocial";

export function InputSocialNumber({ onValue }: IInputSocialNumber) {
  const { dispatch, state, isFocus, onFocusBox, inputRef, pushValue } =
    useInputSocial();

  const onLastKeyDown = (e: KeyboardEvent) => {
    dispatch.setLastValue(e.key);
  };

  useEffect(() => {
    onValue(pushValue.value);
  }, [pushValue]);

  return (
    <InputSocialNumberStyled isFocus={isFocus}>
      <FrontInput
        type="text"
        value={state.frontValue}
        onChange={(e) => dispatch.setFrontValue(e.target.value)}
        ref={inputRef.front}
        onFocus={() => onFocusBox(true)}
        onBlur={() => onFocusBox(false)}
      />
      <span>
        <hr />
      </span>
      <LastInput
        type="text"
        value={state.lastValueDot}
        onChange={() => null}
        ref={inputRef.last}
        onKeyDown={onLastKeyDown}
        onFocus={() => onFocusBox(true)}
        onBlur={() => onFocusBox(false)}
      />
    </InputSocialNumberStyled>
  );
}

const InputSocialNumberStyled = styled.div<{ isFocus: boolean }>`
  box-sizing: border-box;
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 3px;
  display: flex;
  justify-content: space-between;

  ${({ isFocus }) => {
    if (isFocus)
      return css`
        outline: 2px solid #4ac6ff;
      `;
  }}

  span {
    display: inline-block;
    padding: 0 5px;
    margin: 0px auto;
    height: 32px;
  }
  hr {
    width: 10px;
    height: 0.2px;
    background-color: #000;
    margin-top: 15px;
  }
`;
const FrontInput = styled.input`
  ${() => inputStyle}
`;

const LastInput = styled.input`
  ${() => inputStyle}
`;

const inputStyle = css`
  background-color: none;
  height: 30px;
  border: 0;
  outline: none;
  width: calc(50% - 17px);
  :focus {
    outline: none;
  }
`;
