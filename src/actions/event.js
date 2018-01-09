import { EVENT_ADDED, EVENT_EDITED } from "../types";
import { formClosed } from "./eventForm";

export const eventAdded = (data, date) => ({
  type: EVENT_ADDED,
  data,
  date
});

export const eventEdited = ({ description }, date) => ({
  type: EVENT_EDITED,
  description,
  date
});

export const quickAddEvent = data => (dispatch, getState) => {
  const eventDate = `${data.split("/")[0]} ${
    getState().month.currentMonth.activeMonth
  } ${getState().month.currentMonth.activeYear}`;
  const numOfEvents = getState().events.filter(
    event => event.date === eventDate
  ).length;
  const eventUser = data.split("/")[1];
  const eventTitle = data.split("/")[2];
  if (numOfEvents !== 0) {
    return;
  }
  dispatch(eventAdded({ user: eventUser, title: eventTitle }, eventDate));
};

export const addEvent = data => (dispatch, getState) => {
  const eventDate = getState().month.date.activeDay;
  dispatch(eventAdded(data, eventDate));
  dispatch(formClosed());
};

export const editEvent = data => (dispatch, getState) => {
  const eventDate = getState().month.date.activeDay;
  dispatch(eventEdited(data, eventDate));
  dispatch(formClosed());
};
