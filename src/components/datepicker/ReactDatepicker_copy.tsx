import styled from "@emotion/styled";
import { useMemo, useState } from "react";

import DatePicker from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import { range } from "lodash";
import moment from "moment";
import ko from "date-fns/locale/ko"; // 한국어적용

import "react-datepicker/dist/react-datepicker.min.css";

export function ReactDatepicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [month, setMonth] = useState(getMonth(new Date()));

  // const months = useMemo(() => {
  //   return [...Array(12)].map((n, idx) => ({ value: idx + 1, label: `${idx + 1}월` }));
  // }, []);

  // const years = useMemo(() => {
  //   const yearArr = range(1960, getYear(new Date()) + 1, 1); //시작연도, 마지막 연도
  //   return yearArr.map((num, idx) => ({
  //     value: num,
  //     label: num,
  //   }));
  // }, []);

  const months = useMemo(() => {
    return [...Array(12)].map((n, idx) => `${idx + 1}월`);
  }, []);
  const years = range(1990, getYear(new Date()) + 1, 1);

  const onChangeHandler = (date: Date | null) => {
    if (date) setStartDate(date);
  };

  const renderDayContents = (day: number, date: Date) => {
    // 0: 일, 1: 월, 2: 화. 3: 수, 4: 목, 5: 금, 6: 토
    const week = moment(date).day();

    const dayStyle = {
      color: "#505050",
    };
    if (week === 0) dayStyle.color = "#cf0303";
    if (week === 6) dayStyle.color = "#0865ff";
    if (Number(month) !== moment(date).month()) dayStyle.color = "#acacac"; //다른 달의 날짜

    return <span style={dayStyle}>{day}</span>;
  };

  return (
    <DatePicker
      selected={startDate}
      renderDayContents={renderDayContents}
      onChange={(date) => onChangeHandler(date)}
      dateFormat="yyyy-MM-dd"
      locale={ko}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(Number(value))}
          >
            {years.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
    />
  );
}
