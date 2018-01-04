import { EVENT_ADDED, EVENT_EDITED } from "../types";

export default function event(state = {}, action = {}) {
	switch (action.type) {
		case EVENT_ADDED:
			return {
				...state,
				data: { ...action.data },
				date: action.date
			};
		case EVENT_EDITED:
			return {
				...state,
				data: {
					...state.data,
					description: action.description
				}
			};
		default:
			return state;
	}
}
