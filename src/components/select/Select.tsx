import styled from "@emotion/styled";
import { useState } from "react";

interface IPropTypes {
  optionData: { value: string; text: string }[];
  selected: number;
  onChange: (idx: number) => void;
}

export function Select({ optionData, selected, onChange }: IPropTypes) {
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
          <SelectOptionStyled>
            {optionData.map(({ text }, idx) => (
              <li key={idx} onClick={() => setSelectValue(idx)}>
                {text}
              </li>
            ))}
          </SelectOptionStyled>
          <BackgroundLayer />
        </>
      )}
    </SelectWrapper>
  );
}

Select.defaultProps = {
  selected: 0,
};

const SelectWrapper = styled.div``;

const SelectStyled = styled.div`
  border: 1px solid blue;
  padding: 10px;
  :after {
    content: ">";
    float: right;
  }
`;

const SelectOptionStyled = styled.ul`
  padding: 10px;
  margin: 0;
  list-style: none;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 20px);
  z-index: 10;
  li {
    padding: 10px;
    border: 1px solid #ababab;
  }
`;

const BackgroundLayer = styled.div`
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
