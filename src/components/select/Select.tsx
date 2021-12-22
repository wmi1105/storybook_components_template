import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { IPropTypes, SELECT_THEME } from "./types";

export function Select({ optionData, selected, onChange, theme }: IPropTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const nowOptionData = optionData[selected];

  const setSelectOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const setSelectValue = (idx: number) => {
    onChange(idx);
    setSelectOpen();
  };

  return (
    <SelectWrapper>
      <SelectStyled onClick={setSelectOpen}>{nowOptionData.text}</SelectStyled>
      {isOpen && (
        <>
          <SelectOptionStyled theme={theme}>
            {optionData.map(({ text }, idx) => (
              <li key={idx} onClick={() => setSelectValue(idx)}>
                {text}
              </li>
            ))}
          </SelectOptionStyled>
          <BackgroundLayer theme={theme} />
        </>
      )}
    </SelectWrapper>
  );
}

Select.defaultProps = {
  selected: 0,
  theme: SELECT_THEME.DEFAULT,
};

const SelectWrapper = styled.div``;

const SelectStyled = styled.div`
  border: 1px solid blue;
  padding: 10px;
  :after {
    content: "▼";
    float: right;
  }
`;

const SelectOptionStyled = styled.ul<{ theme: SELECT_THEME }>`
  padding: 0;

  margin: 0;
  list-style: none;
  background-color: #fff;
  z-index: 10;
  li {
    padding: 10px;
    border: 1px solid #ababab;
  }

  ${(props) => {
    if (props.theme === SELECT_THEME.POPUP) {
      return css`
        padding: 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: calc(100% - 20px);
      `;
    }
  }}
`;

const BackgroundLayer = styled.div<{ theme: SELECT_THEME }>`
  ${(props) => {
    if (props.theme === SELECT_THEME.POPUP) {
      return css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: black;
        opacity: 0.5;
        z-index: 5;
      `;
    }
  }}
`;
