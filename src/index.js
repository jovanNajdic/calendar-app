import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";
import { date, getCurrentMonth, changeMonth } from "./helpers/date";
import { daySelected, monthChanged } from "./actions/month";
import rootReducer from "./rootReducer";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const days = changeMonth(0);
const currentMonth = getCurrentMonth();
const persistedState = loadState();

const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
	saveState({ events: store.getState().events });
});

store.dispatch(monthChanged(days, currentMonth));
store.dispatch(daySelected(date.format("DD MMMM YYYY")));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
