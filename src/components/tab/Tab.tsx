import styled from "@emotion/styled";

export function Tab() {
  return (
    <TabStyled>
      <div>tab1</div>
      <div>tab2</div>
      <div>tab3</div>
    </TabStyled>
  );
}

const TabStyled = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  > div {
    flex: 3;
    border: 1px solid gray;
    text-align: center;
    padding: 10px 5px;
  }
`;
