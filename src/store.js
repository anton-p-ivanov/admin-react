import { applyMiddleware, createStore } from "redux";
import AppReducer from "./reducers";
import thunk from "redux-thunk";

export default createStore(AppReducer, applyMiddleware(thunk));