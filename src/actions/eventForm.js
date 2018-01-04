import { FORM_OPENED, FORM_CLOSED } from "../types";

export const formOpened = pos => ({
	type: FORM_OPENED,
	pos
});

export const formClosed = () => ({
	type: FORM_CLOSED
});

export const openForm = pos => dispatch => dispatch(formOpened(pos));
export const closeForm = () => dispatch => dispatch(formClosed());
