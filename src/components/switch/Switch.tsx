import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { SWITCH_ACTIVE_COLOR, ISwitch, SWITCH_SIZE } from "./types";

export function Switch({
  id,
  size,
  color,
  isDisabled,
  isChecked,
  onSwitch,
}: ISwitch) {
  const onChangeHandler = () => {
    console.log("click");
    if (!isDisabled) {
      onSwitch(!isChecked);
    }
  };

  return (
    <>
      <SwitchWrapper size={size} checked={isChecked} color={color}>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            disabled={isDisabled}
            value={id}
            onChange={onChangeHandler}
          />
        </label>
      </SwitchWrapper>
    </>
  );
}

Switch.defaultProps = {
  isDisabled: false,
  color: SWITCH_ACTIVE_COLOR.BLUE,
  size: SWITCH_SIZE.W30,
};

const SwitchWrapper = styled.div<{
  size: SWITCH_SIZE;
  checked: boolean;
  color: string;
}>`
  ${({ size }) => SwitchSize[size]}
  position: relative;
  display: inline-block;

  label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 40px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    ::before {
      position: absolute;
      content: "";
      height: 50px;
      width: 50px;
      left: 4px;
      bottom: 4px;
      background-color: #fff;
      -webkit-transition: 0.5s;
      transition: 0.4s;
      border-radius: 60px;
    }

    ${({ checked, size, color }) => {
      const button = SwitchSize[size].height - 8; //높이 - 상하여백
      const move = SwitchSize[size].width - button - 8; //너비 - 버튼크기 - 왼오여백

      return css`
        background-color: ${checked ? color : "#ccc"};
        ::before {
          width: ${`${button}px`};
          height: ${`${button}px`};
          border-radius: ${`${button}px`};
          ${checked ? animation(move) : animation(0)}
        }
      `;
    }}
  }

  input {
    opacity: 0;
  }
`;

const SwitchSize = {
  [SWITCH_SIZE.W100]: {
    width: 100,
    height: 58,
  },
  [SWITCH_SIZE.W80]: {
    width: 80,
    height: 45,
  },
  [SWITCH_SIZE.W50]: {
    width: 50,
    height: 29,
  },
  [SWITCH_SIZE.W30]: {
    width: 30,
    height: 18,
  },
};

const animation = (size: number) => css`
  -webkit-transform: translateX(${`${size}px`});
  -ms-transform: translateX(${`${size}px`});
  transform: translateX(${`${size}px`});
`;
