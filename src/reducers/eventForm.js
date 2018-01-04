import { FORM_OPENED, FORM_CLOSED } from "../types";

export default function eventForm(state = {}, action = {}) {
  switch (action.type) {
    case FORM_OPENED:
      return {
        ...state,
        open: !state.open,
        pos: action.pos
      };
    case FORM_CLOSED:
      return { open: false };
    default:
      return state;
  }
}
