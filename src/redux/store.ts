import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root-reducer";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const initStore = () => {
  return createStore(
    masterReducer,
    process.env.NODE_ENV !== "production"
      ? composeWithDevTools(applyMiddleware())
      : applyMiddleware()
  );
};

export const wrapper = createWrapper(initStore);
