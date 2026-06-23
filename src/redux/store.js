import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import rootSaga from "./saga";

// create the saga middleware or store
const sagaMiddleware = createSagaMiddleware();
// Create the Redux store with the reducer and apply the saga middleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// saga store starts, watcher ready to listen for actions
sagaMiddleware.run(rootSaga);

export default store;
