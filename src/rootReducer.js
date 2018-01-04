import { combineReducers } from "redux";
import month from "./reducers/month";
import events from "./reducers/events";
import weekdays from "./reducers/weekdays";
import eventForm from "./reducers/eventForm";

export default combineReducers({
	events,
	month,
	weekdays,
	eventForm
});
