import {
  CLIENT_FETCH_START,
  CLIENT_FETCH_SUCCESS,
  CLIENT_FETCH_FAILURE,
  HANDLE_ONBOARD_ROLE,
  UPDATE_USER_ROLE,
  SET_AUTH_INFO,
} from '../actions';

export const initialState = {
  isFetching: false,
  Error: '',
  userInfo: '',
  authState: '',
  loggedInUserData: '',
  handle_role: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_INFO:
      return {
        ...state,
        userInfo: action.payload[0],
        authState: action.payload[1],
      };
    case CLIENT_FETCH_START:
      return {
        ...state,
        error: '',
        isFetching: true,
      };
    case CLIENT_FETCH_SUCCESS:
      return {
        ...state,
        loggedInUserData: action.payload,
        isFetching: false,
      };
    case CLIENT_FETCH_FAILURE:
      return {
        ...state,
        Error: action.payload,
        isFetching: false,
      };
    case HANDLE_ONBOARD_ROLE:
      return {
        ...state,
        handle_role: action.payload,
      };
    case UPDATE_USER_ROLE:

    default:
      return state;
  }
};
