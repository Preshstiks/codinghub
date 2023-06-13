import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
  auth: authReducer,
});
