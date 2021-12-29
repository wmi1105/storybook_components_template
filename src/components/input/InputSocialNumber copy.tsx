import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { isEmpty } from "lodash";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { IInputSocialNumber } from "./types";
import { verifyNumber } from "../FormItem/validationCheck";

export function InputSocialNumber({ onValue }: IInputSocialNumber) {
  const frontInputRef = useRef<HTMLInputElement>(null);
  const lastInputRef = useRef<HTMLInputElement>(null);

  const [frontValue, setFrontValue] = useState("");
  const [lastValue, setLastValue] = useState("");

  const onChangeHandler = (type: string, value: string) => {
    if (verifyNumber(value)) {
      if (type === "front") setFrontValue(value);
      if (type === "last" && lastValue.length < 8) {
        setLastValue(value);
      }
    }
  };

  const onLastKeyDown = (e: KeyboardEvent) => {
    if (isEmpty(lastValue) && e.key === "Backspace") {
      frontInputRef.current?.focus();
    }
  };

  const onFocusCtrl = () => {
    if (frontValue.length === 6) {
      lastInputRef.current?.focus();
    }
    if (frontValue.length < 6) {
      frontInputRef.current?.focus();
    }
  };

  useEffect(() => {
    onFocusCtrl();
  }, [frontValue]);

  return (
    <InputSocialNumberStyled>
      <FrontInput
        type="text"
        value={frontValue}
        onChange={(e) => onChangeHandler("front", e.target.value)}
        ref={frontInputRef}
      />
      <span>
        <hr />
      </span>
      <LastInput
        type="password"
        value={lastValue}
        onChange={(e) => onChangeHandler("last", e.target.value)}
        ref={lastInputRef}
        onKeyDown={onLastKeyDown}
        onFocus={onFocusCtrl}
      />
    </InputSocialNumberStyled>
  );
}

const InputSocialNumberStyled = styled.div`
  box-sizing: border-box;
  border: 1px solid #ededed;
  padding: 3px;
  display: flex;
  justify-content: space-between;

  span {
    display: inline-block;
    padding: 0 5px;
    margin: 0px auto;
    height: 32px;
  }
  hr {
    width: 10px;
    height: 0.5px;
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
  width: calc(50% - 17px);
  :focus {
    outline: none;
  }
`;
