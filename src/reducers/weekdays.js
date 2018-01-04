import { getWeekDays } from "../helpers/date";

const defaultState = [...getWeekDays()];

export default function weekdays(state = defaultState, action = {}) {
	switch (action.type) {
		default:
			return state;
	}
}
