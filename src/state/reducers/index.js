import {
  CLIENT_FETCH_START,
  CLIENT_FETCH_SUCCESS,
  CLIENT_FETCH_FAILURE,
  FETCH_USER_INFO,
  FETCH_AUTH_STATE,
  HANDLE_ONBOARD_ROLE,
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
    case FETCH_AUTH_STATE:
      return {
        ...state,
        authState: action.payload,
      };
    case FETCH_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case HANDLE_ONBOARD_ROLE:
      console.log('REDUCER:', action.payload);
      return {
        ...state,
        handle_role: action.payload,
      };

    default:
      return state;
  }
};
