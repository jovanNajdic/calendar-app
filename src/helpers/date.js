import moment from "moment";

export const date = moment();

export const getWeekDays = () => date._locale._weekdays;

export const getFirstDay = month => moment(month).startOf("M");

export const getCurrentMonth = () => ({
  activeMonth: date.format("MMMM"),
  activeYear: date.format("YYYY")
});

export const formatDay = day => ({
  data: {
    full: day,
    year: day.format("YYYY"),
    month: day.format("MMMM"),
    day: day.format("D"),
    date: day.format("DD MMMM YYYY")
  }
});

export const getAllDays = month => {
  const daysInMonth = [...Array(month.daysInMonth())];
  const daysArr = Object.keys(daysInMonth).map(day =>
    moment(getFirstDay(month)).add(day, "d")
  );
  for (let i = 0; i < getFirstDay(month).weekday(); i++) {
    daysArr.unshift(
      moment(month)
        .subtract(1, "months")
        .endOf("M")
        .subtract(i, "days")
    );
  }
  return daysArr.map(day => formatDay(day));
};

export const changeMonth = i => {
  date.add(i, "M");
  return getAllDays(date);
};
