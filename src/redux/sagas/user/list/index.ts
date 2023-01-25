import { getUsersListRequestSuccess, getUsersListRequestFailure } from "@/redux/actions/user/list";
import { USER_REQUEST_TYPES } from "@/redux/types/user";
import { getUsersRequest } from "@/services/user.service";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* fetchUsersAsync(): any {
  try {
    const res = yield call(getUsersRequest);
    yield put(getUsersListRequestSuccess(res));
  } catch (error) {
    yield put(getUsersListRequestFailure(error));
  }
}

export function* onFetchUsers() {
  yield takeLatest(USER_REQUEST_TYPES.GET_ALL_RERQUEST_START, fetchUsersAsync);
}

export function* usersSaga() {
  yield all([call(onFetchUsers)]);
}