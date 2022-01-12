import styled from "@emotion/styled";
import { useMemo, useRef, useState } from "react";

import DatePicker from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import { range } from "lodash";
import moment from "moment";
import ko from "date-fns/locale/ko"; // 한국어적용
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "react-datepicker/dist/react-datepicker.min.css";

const defaultDate = "2022-01-01";

export function ReactDatepicker() {
  const [selectedDate, setSelectedDate] = useState(new Date(defaultDate));
  const [calMonth, setCalMonth] = useState(new Date(defaultDate).getMonth());

  const months = useMemo(() => {
    return [...Array(12)].map((n, idx) => `${idx + 1}월`);
  }, []);
  const years = range(1990, getYear(new Date()) + 1, 1);

  const onChangeHandler = (date: Date | null) => {
    if (Number(calMonth) !== moment(date).month()) return false;
    console.log(date);
    if (date) setSelectedDate(date);
  };

  const renderDayContents = (day: number, date: Date) => {
    // 0: 일, 1: 월, 2: 화. 3: 수, 4: 목, 5: 금, 6: 토
    const week = moment(date).day();

    const dayStyle = {
      color: "#505050",
    };
    if (week === 0) dayStyle.color = "#cf0303";
    if (week === 6) dayStyle.color = "#0865ff";

    if (Number(calMonth) !== moment(date).month()) {
      dayStyle.color = "#dfdfdf";
    } //다른 달의 날짜

    return <span style={dayStyle}>{day}</span>;
  };

  return (
    <DatePicker
      selected={selectedDate}
      showPopperArrow={false} //input을 가리키는 화살표 제거
      onMonthChange={(date) => setCalMonth(date.getMonth())}
      onChange={(date) => onChangeHandler(date)}
      fixedHeight
      dateFormat="yyyy-MM-dd"
      locale={ko}
      inline
      renderDayContents={renderDayContents}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <CustomDateWrapper>
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <FiChevronLeft />
          </button>
          <div className="custom-month">
            {date.getFullYear()}년 {months[date.getMonth()]}
          </div>
          <button onClick={decreaseMonth} disabled={nextMonthButtonDisabled}>
            <FiChevronRight />
          </button>
        </CustomDateWrapper>
      )}
    />
  );
}

const CustomDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  .custom-month {
    font-weight: bold;
  }
`;
