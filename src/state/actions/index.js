import axiosWithAuth from '../../api/axiosWithAuth';

// Initial authState & UserInfo in HomeContainer set to state
// for future axios calls this is required per the server middleware
export const SET_AUTH_INFO = 'SET_AUTH_INFO';

// Get User by ID fetch status
export const FETCH_START = 'FETCH_START';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const CLIENT_FETCH_SUCCESS = 'CLIENT_FETCH_SUCCESS';

// sets role to state for OnBoarding in Container after put request
export const HANDLE_UPDATE_USER = 'HANDLE_UPDATE_USER';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const fetchLoggedInUser = (userInfo, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`profiles/${userInfo.sub}`)
    .then(res => {
      dispatch({ type: CLIENT_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
  dispatch({ type: SET_AUTH_INFO, payload: [userInfo, authState] });
};

export const updateUser = (updatedUserProfile, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    // send the updates to the server
    .put('/profiles', updatedUserProfile)
    .then(res => {
      // handles the response sets res to state
      dispatch({ type: HANDLE_UPDATE_USER, payload: res.data.profile });
    })
    .catch(err => {
      // replace
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};
