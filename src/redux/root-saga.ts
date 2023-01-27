import { all, call, fork } from "redux-saga/effects";
import { usersSaga } from "@/redux/sagas/user/list";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
