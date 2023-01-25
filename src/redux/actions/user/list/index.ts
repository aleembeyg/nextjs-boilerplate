import { USER_REQUEST_TYPES } from "@/redux/types/user";
import { createAction } from "@/utils/index.utils";

export const getUsersListRequest: any = () =>
  createAction(USER_REQUEST_TYPES.GET_ALL_RERQUEST_START);

export const getUsersListRequestSuccess: any = (data: any) =>
  createAction(USER_REQUEST_TYPES.GET_ALL_RERQUEST_SUCCESS, data);

export const getUsersListRequestFailure: any = (error: any) =>
  createAction(USER_REQUEST_TYPES.GET_ALL_RERQUEST_FAILURE, error);
