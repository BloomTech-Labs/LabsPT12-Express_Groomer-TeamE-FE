import {
  FETCH_START,
  FETCH_FAILURE,
  USER_FETCH_SUCCESS,
  HANDLE_UPDATE_USER,
  FETCH_USER_PETS,
  ADD_PET_SUCCESS,
  DELETE_PET_SUCCESS,
  FIND_PET_BYID,
  UPDATE_PET_SUCCESS,
} from '../actions';

export const initialState = {
  isFetching: false,
  Error: '',
  userInfo: '',
  authState: '',
  loggedInUserData: '',
  loggedInUsersPets: '',
  petFoundById: '',
  updatePetResponse: '',
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
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        loggedInUserData: action.payload,
        isFetching: false,
      };
    case HANDLE_UPDATE_USER:
      return {
        ...state,
        loggedInUserData: action.payload,
      };
    case FETCH_USER_PETS:
      return {
        ...state,
        loggedInUsersPets: action.payload,
      };
    case ADD_PET_SUCCESS:
      return {
        ...state,
        loggedInUsersPets: action.payload,
      };
    case DELETE_PET_SUCCESS:
      return {
        ...state,
        Error: action.payload,
      };
    case FIND_PET_BYID:
      return {
        ...state,
        petFoundById: action.payload,
      };
    case UPDATE_PET_SUCCESS:
      return {
        ...state,
        updatePetResponse: action.payload,
      };

    default:
      return state;
  }
};
