import { USER_REQUEST_TYPES } from "@/redux/types/user";

export interface userList {
  users: any;
  isLoading: boolean;
  error: any;
}

const usersListInitState: userList = {
  users: null,
  isLoading: false,
  error: null,
};

const userListReducer = (state = usersListInitState, action: any) => {
  switch (action.type) {
    case USER_REQUEST_TYPES.GET_ALL_REQUEST_START: {
      return { ...state, users: null, isLoading: true };
    }
    case USER_REQUEST_TYPES.GET_ALL_REQUEST_SUCCESS: {
      return { ...state, users: action.payload, isLoading: false };
    }
    case USER_REQUEST_TYPES.GET_ALL_REQUEST_FAILURE: {
      return { ...state, users: null, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};

export default userListReducer;
