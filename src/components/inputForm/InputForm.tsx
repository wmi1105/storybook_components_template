import styled from "@emotion/styled";

interface IPropTypes {
  children: JSX.Element;
}

export function InputForm({ children }: IPropTypes) {
  return (
    <InputFormStyled>
      <ElementWrapper>{children}</ElementWrapper>
      <CaptionWrapper></CaptionWrapper>
    </InputFormStyled>
  );
}

const InputFormStyled = styled.div``;
const ElementWrapper = styled.div``;
const CaptionWrapper = styled.div``;
