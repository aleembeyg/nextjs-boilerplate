import { USER_REQUEST_TYPES } from "@/redux/types/user";
import { createAction } from "@/utils/index.utils";

export const getUsersListRequest = () =>
  createAction(USER_REQUEST_TYPES.GET_ALL_REQUEST_START);
export const getUsersListRequestSuccess = (data: any) =>
  createAction(USER_REQUEST_TYPES.GET_ALL_REQUEST_SUCCESS, data);
export const getUsersListRequestFailure = (error: any) =>
  createAction(USER_REQUEST_TYPES.GET_ALL_REQUEST_FAILURE, error);
