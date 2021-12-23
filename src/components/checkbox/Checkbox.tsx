import styled from "@emotion/styled";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { ICheckbox } from "./types";

export function Checkbox({ id, label, value, onChange }: ICheckbox) {
  const onClickHandler = () => {
    onChange(id, !value);
  };

  return (
    <CheckboxStyled onClick={onClickHandler}>
      <CheckIconStyled>
        {value ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
      </CheckIconStyled>
      <CheckLabelStyled>{label}</CheckLabelStyled>
    </CheckboxStyled>
  );
}

const CheckboxStyled = styled.div`
  line-height: 30px;
  cursor: default;
`;
const CheckIconStyled = styled.span`
  color: #0400ff;
  padding-right: 5px;
`;

const CheckLabelStyled = styled.span``;
