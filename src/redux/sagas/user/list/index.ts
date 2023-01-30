import { getUsersRequest } from "@/services/user.service";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  getUsersListRequestFailure,
  getUsersListRequestSuccess,
} from "@/redux/actions/user";
import { USER_REQUEST_TYPES } from "@/redux/types/user";

export function* fetchUsersAsync(): any {
  try {
    const res = yield call(getUsersRequest);
    yield put(getUsersListRequestSuccess(res));
  } catch (error: any) {
    yield put(getUsersListRequestFailure(error.message));
  }
}

export function* onFetchUsers() {
  yield takeLatest(USER_REQUEST_TYPES.GET_ALL_REQUEST_START, fetchUsersAsync);
}

export function* usersSaga() {
  yield all([call(onFetchUsers)]);
}
