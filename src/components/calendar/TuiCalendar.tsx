import styled from "@emotion/styled";
import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";

// If you use the default popups, use this.
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import { ICal } from "./Calendar_types";
import { calCalendars, calSchedules } from "./CalOption.data";

export function TuiCalendar() {
  const today = new Date();
  const getDate = (
    type: string,
    start: Date,
    value: number,
    operator: "+" | "-"
  ): Date => {
    const date = new Date(start);
    type = type.charAt(0).toUpperCase() + type.slice(1);

    if (operator === "+") {
      type === "date"
        ? date[`setDate`](date[`getDate`]() + value)
        : date[`setHours`](date[`getHours`]() + value);
    } else {
      type === "date"
        ? date[`setDate`](date[`getDate`]() + value)
        : date[`setHours`](date[`getHours`]() + value);
    }

    return date;
  };

  return (
    <Calendar
      height="700px"
      view="month" //월간으로 보기
      month={{
        //view='month'일 때 옵션
        startDayOfWeek: 0, //일요일 부터 시작
        daynames: ["일", "월", "화", "수", "목", "금", "토"],
      }}
      week={{
        //view='week'일 때 옵션
        showTimezoneCollapseButton: true, //여러 시간대를 닫는 축소 버튼 표시(default = false)
        timezonesCollapsed: true, //초기 다중 시간대 축소 상태(default = false)
        startDayOfWeek: 0,
        daynames: ["일", "월", "화", "수", "목", "금", "토"],
      }}
      disableDblClick={true} //날짜 더블클릭 비활성
      disableClick={true} //날짜 클릭 비활성
      calendars={[...calCalendars]}
      template={{
        //일정 style custom
        milestone: function (schedule) {
          return (
            '<span style="color:red;"><i class="fa fa-flag"></i> ' +
            schedule.title +
            "</span>"
          );
        },
        milestoneTitle: function () {
          return "Milestone";
        },
        task: function (schedule) {
          return "&nbsp;&nbsp;#" + schedule.title;
        },
        taskTitle: function () {
          return '<label><input type="checkbox" />Task</label>';
        },
        allday: function (schedule) {
          return schedule.title + ' <i class="fa fa-refresh"></i>';
        },
        alldayTitle: function () {
          return "All Day";
        },
        time: function (schedule) {
          return (
            schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start
          );
        },
      }}
      timezones={[
        {
          timezoneName: "KO",
          timezoneOffset: 540,
          displayLabel: "GMT+09:00",
          tooltip: "Seoul",
        },
        {
          timezoneName: "LA",
          timezoneOffset: -420,
          displayLabel: "GMT-08:00",
          tooltip: "Los Angeles",
        },
      ]}
      useDetailPopup={false} //기본 세부정보 팝업 사용 여부(default = false)
      useCreationPopup={false} //기본 생성 팝업 사용 여부(default = false)
      schedules={[...calSchedules]}
    />
  );
}
