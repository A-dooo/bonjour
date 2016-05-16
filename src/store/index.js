import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

export default function configureSrore(rootReducer, initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
}