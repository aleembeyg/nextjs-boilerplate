import { combineReducers } from "redux";
import { usersListReducer } from "./reducers/user/list";

export const rootReducer = combineReducers({
  users: usersListReducer,
});
