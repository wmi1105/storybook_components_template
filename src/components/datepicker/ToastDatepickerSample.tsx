/* 
    toast ui : datepicker
    https://ui.toast.com/tui-date-picker
    https://nhn.github.io/tui.date-picker/latest/DatePicker

*/
import { useEffect, useRef } from "react";
import DatePicker from "tui-date-picker";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import { useState } from "react";
import moment from "moment";

export function ToastDatepickers() {
  const [tui, setTui] = useState<DatePicker>();
  const tuiWrapperRef = useRef(null);
  const tuiInputRef = useRef(null);

  const onChange = (val: Date) => {
    console.log("change", val);
  };

  const onClose = () => {
    console.log("close");
    return true;
  };

  const onDraw = (event: Element) => {
    console.log("draw");
    return true;
  };

  const onOpen = () => {
    console.log("open");
    return true;
  };

  console.log(moment().format());

  useEffect(() => {
    if (tui === undefined) {
      setTui(
        new DatePicker(tuiWrapperRef.current || "#wrapper", {
          input: {
            element: tuiInputRef.current || "#datepicker-input",
          },
          language: "ko",
          timePicker: true,
        })
      );
    } else {
      tui.on("change", () =>
        typeof onChange === "function" ? onChange(tui.getDate()) : undefined
      );
      tui.on("close", () =>
        typeof onClose === "function" ? onClose() : undefined
      );
      tui.on("draw", (event: HTMLElement) =>
        typeof onDraw === "function" ? onDraw(event) : undefined
      );
      tui.on("open", () =>
        typeof onOpen === "function" ? onOpen() : undefined
      );
    }
    return () => {
      if (tui !== undefined) {
        tui.destroy();
      }
    };
  });

  console.log(tui);

  return (
    <>
      <div>
        <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
          <input
            type="text"
            ref={tuiInputRef}
            id="datepicker-input"
            aria-label="Date-Time"
            readOnly
          />
          <span className="tui-ico-date" />
        </div>
        <div id="wrapper" ref={tuiWrapperRef} />
      </div>
    </>
  );
}
