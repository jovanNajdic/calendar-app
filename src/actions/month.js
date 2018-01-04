import { MONTH_CHANGED, DAY_SELECTED } from "../types";
import { changeMonth, getCurrentMonth } from "../helpers/date";
import { formOpened, formClosed } from "./eventForm";

export const monthChanged = (days, currentMonth) => ({
  type: MONTH_CHANGED,
  days,
  currentMonth
});

export const daySelected = date => ({
  type: DAY_SELECTED,
  date
});

export const selectDay = (date, pos) => dispatch => {
  dispatch(daySelected(date));
  dispatch(formOpened(pos));
};

export const monthChange = n => dispatch => {
  const month = changeMonth(n);
  const currentMonth = getCurrentMonth();
  dispatch(monthChanged(month, currentMonth));
  dispatch(formClosed());
};
