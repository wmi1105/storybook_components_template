/* 
    toast ui : datepicker
    https://ui.toast.com/tui-date-picker
    https://nhn.github.io/tui.date-picker/latest/DatePicker

*/
import { FocusEvent, useEffect, useRef } from "react";
import DatePicker from "tui-date-picker";

import "tui-date-picker/dist/tui-date-picker.min.css";

export function ToastDatepicker() {
  const instanceRef = useRef<DatePicker>();
  const inputRef = useRef<any>();

  //   const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
  //     console.log(e);
  //     console.log("event", e.target.value);
  //   };

  useEffect(() => {
    console.log("input", inputRef.current.value);
  }, [inputRef]);

  useEffect(() => {
    const conatiner = document.getElementById(
      "tui-date-picker-container"
    ) as HTMLElement;
    const target = document.getElementById(
      "tui-date-picker-target"
    ) as HTMLElement;

    instanceRef.current = new DatePicker(conatiner, {
      language: "ko",

      input: {
        element: target,
      },
    });

    console.log("set", instanceRef.current.getDate());
  }, []);

  return (
    <>
      <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
        <input
          ref={inputRef}
          type="text"
          id="tui-date-picker-target"
          aria-label="Date-Time"
          //   onBlur={onBlurHandler}
        />
        <span className="tui-ico-date"></span>
      </div>
      <div id="tui-date-picker-container" style={{ marginTop: "-1px" }}></div>
    </>
  );
}
