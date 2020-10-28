import {
  FETCH_START,
  FETCH_FAILURE,
  CLIENT_FETCH_SUCCESS,
  HANDLE_UPDATE_USER,
  UPDATE_USER_FAILURE,
  SET_AUTH_INFO,
} from '../actions';

export const initialState = {
  isFetching: false,
  Error: '',
  userInfo: '',
  authState: '',
  loggedInUserData: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: '',
        isFetching: true,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        Error: action.payload,
        isFetching: false,
      };
    case CLIENT_FETCH_SUCCESS:
      return {
        ...state,
        loggedInUserData: action.payload,
        isFetching: false,
      };
    case SET_AUTH_INFO:
      return {
        ...state,
        userInfo: action.payload[0],
        authState: action.payload[1],
      };
    case HANDLE_UPDATE_USER:
      return {
        ...state,
        loggedInUserData: action.payload,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        Error: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};
