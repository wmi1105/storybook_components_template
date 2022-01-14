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
      ? date.setDate(date.getDate() + value)
      : date.setHours(date.getHours() + value);
  } else {
    type === "date"
      ? date.setDate(date.getDate() - value)
      : date.setHours(date.getHours() - value);
  }

  return date;
};

export const calCalendars = [
  {
    id: "0",
    name: "Private",
    bgColor: "#9e5fff",
    borderColor: "#9e5fff",
  },
  {
    id: "1",
    name: "Company",
    bgColor: "#00a9ff",
    borderColor: "#00a9ff",
  },
];

export const calSchedules = [
  {
    id: "1",
    calendarId: "0",
    title: "TOAST UI Calendar Study",
    category: "time",
    dueDateClass: "",
    start: today.toISOString(),
    end: getDate("date", today, 3, "+").toISOString(),
  },
  {
    id: "2",
    calendarId: "0",
    title: "Practice",
    category: "milestone",
    dueDateClass: "",
    start: getDate("date", today, 1, "+").toISOString(),
    end: getDate("date", today, 1, "+").toISOString(),
    isReadOnly: true,
  },
  {
    id: "3",
    calendarId: "0",
    title: "FE Workshop",
    category: "allday",
    dueDateClass: "",
    start: getDate("date", today, 3, "-").toISOString(),
    end: getDate("date", today, 1, "-").toISOString(),
    isReadOnly: true,
  },
  {
    id: "4",
    calendarId: "0",
    title: "Report",
    category: "time",
    dueDateClass: "",
    start: today.toISOString(),
    end: getDate("hours", today, 1, "+").toISOString(),
  },
];
