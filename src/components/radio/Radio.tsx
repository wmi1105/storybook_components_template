import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { IRadio, RADIO_LINE_THEME } from "./types";

export function Radio({ lineTheme, id, items, checkValue, onChange }: IRadio) {
  const onChangeHandler = (value: string) => {
    onChange(id, value);
  };

  return (
    <>
      {items.map((item, idx) => (
        <RadioStyled
          key={idx}
          lineStyles={lineStyled[lineTheme]}
          onClick={() => onChangeHandler(item.value)}
        >
          <input
            type="radio"
            name={id}
            onChange={() => false}
            checked={checkValue === item.value}
          />
          <label>{item.label}</label>
        </RadioStyled>
      ))}
    </>
  );
}

Radio.defaultProps = {
  lineTheme: RADIO_LINE_THEME.HORIZONTAL,
};

const RadioStyled = styled.div<{ lineStyles: SerializedStyles }>`
  ${(props) => props.lineStyles}
`;

const lineStyled = {
  [RADIO_LINE_THEME.HORIZONTAL]: css`
    display: inline-block;
    padding: 5px 5px 5px 0;
  `,
  [RADIO_LINE_THEME.VERTICAL]: css`
    padding: 5px 0;
  `,
};
