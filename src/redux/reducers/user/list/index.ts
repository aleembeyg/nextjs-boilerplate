import { APIStatus } from "@/utils/index.utils";
import { USER_REQUEST_TYPES } from "@/redux/types/user";

export const POST_INITIAL_STATE = {
  users: [] as any,
  requestStatus: APIStatus.idle,
  error: {} as any,
};

export const usersListReducer = (state = POST_INITIAL_STATE, action: any) => {
  switch (action && action.type) {
    case USER_REQUEST_TYPES.GET_ALL_RERQUEST_START:
      return {
        ...state,
        users: null,
        requestStatus: APIStatus.pending,
        error: null,
      };
    case USER_REQUEST_TYPES.GET_ALL_RERQUEST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        requestStatus: APIStatus.success,
      };
    case USER_REQUEST_TYPES.GET_ALL_RERQUEST_FAILURE:
      return {
        ...state,
        requestStatus: APIStatus.failure,
        error:
          action.payload.message ||
          process.env.API_ERROR_MESSAGE,
      };
    default:
      return state;
  }
};
