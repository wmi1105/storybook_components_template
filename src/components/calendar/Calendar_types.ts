//https://github.com/nhn/tui.calendar/blob/v1.15.2/src/js/factory/calendar.js
import { DateType, IOptions } from "tui-calendar";

export interface ICal extends Pick<IOptions, "calendars"> {
  defaultValue: "day" | "week" | "month";
  schedule: ICalOptSchedule[];
}

export interface ICalOptCalendars {
  /**
   * 타입별 id 지정, schedule에서 타입을 설정할 때 번호로 입력됨.
   */
  id: string;
  /**
   *The calendar name
   */
  name: string;
  /**
   * schedule이 'allDay'일 때 배경색
   */
  bgColor: string;
  /**
   * schedule이 'time'일 떄 dot 색
   */
  borderColor: string;
}

//https://nhn.github.io/tui.calendar/latest/Schedule
export interface ICalOptSchedule {
  /**
   *    schedule id
   */
  id: string;
  /**
   *    calendar option의 id
   */
  calendarId: string;
  /**
   *    스케줄 타이틀(달력에서 맨위에 보이는 내용)
   */
  title: string;
  /**
   *    스케쥴 타입
   *  - allday : 종일, 몇일간 설정
   *  - time : 시작일시 ~ 종료일시
   */
  category: "milestone" | "task" | "allday" | "time";
  /**
   * 일정 시작 일시
   */
  start: DateType;
  /**
   * 일정 종료 일시
   */
  end: DateType;
}
