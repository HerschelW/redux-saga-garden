import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";
import logger from "redux-logger";
import Axios from "axios";
import App from "./App";

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: "Rose" },
  { id: 2, name: "Tulip" },
  { id: 3, name: "Oak" },
];

const plantList = (state = startingPlantArray, action) => {
  // try {
  //   const response = yield Axios.get("/api/plant")
  // }
  // switch (action.type) {
  //   case "ADD_PLANT":
  //     return [...state, action.payload];
  //   default:
  //     return state;
  // }
};

function* rootSaga() {
  yield takeEvery("ADD_PLANT", plantList);
}

const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
