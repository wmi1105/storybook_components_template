import { isNull } from "lodash";
import { useEffect, useReducer, useRef, useState } from "react";

interface IState {
  frontValue: string;
  lastValue: string | null;
  lastValueDot: string;
  focusArea: "front" | "last";
}

type IAction =
  | {
      type: "FRONT";
      value: string;
    }
  | {
      type: "LAST";
      value: string;
    }
  | {
      type: "FOCUS";
      value: "front" | "last";
    };

const initState: IState = {
  frontValue: "",
  lastValue: null,
  lastValueDot: "",
  focusArea: "front",
};

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FRONT":
      const fValue =
        !isNull(action.value) && !isNaN(Number(action.value))
          ? action.value
          : state.frontValue;

      return {
        ...state,
        frontValue: fValue,
        lastValue: fValue.length === 6 ? "" : null,
        focusArea: fValue.length === 6 ? "last" : "front",
      };

    case "LAST":
      const key = action.value;
      let LValue: string | null = null;
      if (key === "Backspace") {
        if (state.lastValue) {
          const temp = state.lastValue;
          LValue =
            temp.length === 0 ? null : temp.substring(0, temp.length - 1);
        }
      } else {
        if (state.lastValue?.length === 7) return { ...state };

        LValue = !isNaN(Number(action.value))
          ? state.lastValue + action.value
          : state.lastValue;
      }

      const dot = isNull(LValue)
        ? ""
        : [...Array(LValue.length)].fill("*").toString().replaceAll(",", "");

      const focus = isNull(LValue) ? "front" : "last";

      return {
        ...state,
        lastValue: LValue,
        lastValueDot: dot,
        focusArea: focus,
      };

    case "FOCUS":
      const focusValue = action.value ? action.value : state.focusArea;
      return { ...state, focusArea: focusValue };
    default:
      return state;
  }
}

export function useInputSocial() {
  const frontInputRef = useRef<HTMLInputElement>(null);
  const lastInputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(reducer, initState);
  const [isFocus, setIsFocus] = useState(false);
  const [pushValue, setPushValue] = useState({
    state: false,
    value: ["", ""],
  });

  const setFrontValue = (value: string) => {
    dispatch({ type: "FRONT", value });
  };

  const setLastValue = (value: string) => {
    dispatch({ type: "LAST", value });
  };

  const onFocusBox = (val: boolean) => {
    setIsFocus(val);
  };

  const onFocusCtrl = (area: "front" | "last") => {
    dispatch({ type: "FOCUS", value: area });
  };

  const onValueHandle = () => {
    if (state.frontValue.length === 6 && state.lastValue?.length === 7) {
      if (!pushValue.state)
        setPushValue({
          state: true,
          value: [state.frontValue, state.lastValue],
        });
    } else {
      if (pushValue.state) {
        setPushValue({
          state: false,
          value: ["", ""],
        });
      }
    }
  };

  useEffect(() => {
    if (state.focusArea === "front") frontInputRef.current?.focus();
    if (state.focusArea === "last") lastInputRef.current?.focus();

    onValueHandle();
  }, [state]);

  return {
    dispatch: {
      setFrontValue,
      setLastValue,
    },
    state,
    isFocus,
    onFocusBox,
    onFocusCtrl,
    inputRef: {
      front: frontInputRef,
      last: lastInputRef,
    },
    pushValue,
  };
}
