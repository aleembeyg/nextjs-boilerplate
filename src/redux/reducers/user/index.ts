import { USER_REQUEST_TYPES } from "@/redux/types/user";
import { APIStatus } from "@/utils/index.utils";

export interface userList {
  users: any;
  requestStatus: APIStatus;
  error: any;
}

const usersListInitState: userList = {
  users: null,
  requestStatus: APIStatus.idle,
  error: null,
};

const userListReducer = (state = usersListInitState, action: any) => {
  switch (action.type) {
    case USER_REQUEST_TYPES.GET_ALL_REQUEST_START: {
      return { ...state, users: null, requestStatus: APIStatus.pending };
    }
    case USER_REQUEST_TYPES.GET_ALL_REQUEST_SUCCESS: {
      return { ...state, users: action.payload, requestStatus: APIStatus.success };
    }
    case USER_REQUEST_TYPES.GET_ALL_REQUEST_FAILURE: {
      return { ...state, users: null, error: action.payload, requestStatus: APIStatus.failure };
    }
    default:
      return state;
  }
};

export default userListReducer;
