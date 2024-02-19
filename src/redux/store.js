
import fetchReducer from "./reducer/fetchReducer";
import { createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store=createStore(fetchReducer,applyMiddleware(thunk))
export default store