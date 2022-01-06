/* toast ui - date range picker
    https://nhn.github.io/tui.date-picker/latest/DateRangePicker
*/
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import DatePicker, { DateRangePicker } from "tui-date-picker";
import { IToastDTP } from "./types";

export function ToastDateRangePicker({
  useTime,
  onChange,
  defaultDate,
}: IToastDTP) {
  const [tui, setTui] = useState<DateRangePicker>();
  const tuiStartInputRef = useRef(null);
  const utiStartWrapperRef = useRef(null);
  const tuiEndInputRef = useRef(null);
  const utiEndWrapperRef = useRef(null);

  console.log("defaultDate", defaultDate);

  const formatDate = (val: Date | undefined) => {
    if (!val) return "";
    return moment(val).format(useTime ? "yyyy-MM-DD HH:mm A" : "yyyy-MM-DD");
  };

  const onChangeHandler = () => {
    const getDate = {
      start: formatDate(tui?.getStartDate()),
      end: formatDate(tui?.getEndDate()),
    };

    onChange(getDate);
  };

  useEffect(() => {
    if (tui === undefined) {
      const instance = DatePicker.createRangePicker({
        startpicker: {
          date: defaultDate ? defaultDate.start : new Date(),
          input: tuiStartInputRef.current || "#startpicker-input",
          container: utiStartWrapperRef.current || "#startpicker-container",
        },
        endpicker: {
          date: defaultDate ? defaultDate.end : new Date(),
          input: tuiEndInputRef.current || "#endpicker-input",
          container: utiEndWrapperRef.current || "#endpicker-container",
        },
        timePicker: useTime,
        format: useTime ? "yyyy-MM-dd HH:mm A" : "yyyy-MM-dd",
        language: "ko",
        selectableRanges: [
          [
            new Date(),
            new Date(
              new Date().getFullYear() + 1,
              new Date().getMonth(),
              new Date().getDate()
            ),
          ],
        ],
      });

      setTui(instance);
    } else {
      tui.on("change:start", () =>
        typeof onChange === "function" ? onChangeHandler() : undefined
      );
      tui.on("change:end", () =>
        typeof onChange === "function" ? onChangeHandler() : undefined
      );
    }

    return () => {
      if (tui !== undefined) {
        tui.destroy();
      }
    };
  });

  return (
    <>
      <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
        <input
          id="startpicker-input"
          ref={tuiStartInputRef}
          type="text"
          aria-label="Date"
          readOnly
        />
        <span className="tui-ico-date"></span>
        <div
          id="startpicker-container"
          ref={utiStartWrapperRef}
          style={{ marginLeft: "-1px" }}
        ></div>
      </div>
      <span> - </span>
      <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
        <input
          id="endpicker-input"
          ref={tuiEndInputRef}
          type="text"
          aria-label="Date"
          readOnly
        />
        <span className="tui-ico-date"></span>
        <div
          id="endpicker-container"
          ref={utiEndWrapperRef}
          style={{ marginLeft: "-1px" }}
        ></div>
      </div>
    </>
  );
}
