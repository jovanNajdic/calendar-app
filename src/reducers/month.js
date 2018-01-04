import { MONTH_CHANGED, DAY_SELECTED } from "../types";

export default function month(state = {}, action = {}) {
  switch (action.type) {
    case MONTH_CHANGED:
      return {
        ...state,
        currentMonth: action.currentMonth,
        days: action.days
      };
    case DAY_SELECTED:
      return {
        ...state,
        date: {
          activeDay: action.date
        }
      };
    default:
      return state;
  }
}
