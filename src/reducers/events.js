import { EVENT_ADDED, EVENT_EDITED } from "../types";
import event from "./event";

export default function events(state = [], action = {}) {
	switch (action.type) {
		case EVENT_ADDED:
			return [...state, event(undefined, action)];
		case EVENT_EDITED:
			return state.map(e => (e.date === action.date ? event(e, action) : e));
		default:
			return state;
	}
}
