import { combineReducers } from "redux";
import userListReducer from "./reducers/user";

export const rootReducer = combineReducers({
  usersList: userListReducer,
});
