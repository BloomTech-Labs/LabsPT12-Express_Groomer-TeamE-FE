import axiosWithAuth from '../../api/axiosWithAuth';

// Initial authState & UserInfo in HomeContainer set to state
// for future axios calls this is required per the server middleware
export const SET_AUTH_INFO = 'SET_AUTH_INFO';

// Get User by ID fetch status
export const CLIENT_FETCH_START = 'CLIENT_FETCH_START';
export const CLIENT_FETCH_SUCCESS = 'CLIENT_FETCH_SUCCESS';
export const CLIENT_FETCH_FAILURE = 'CLIENT_FETCH_FAILURE';

// sets role to state for OnBoarding in Container after put request
export const HANDLE_UPDATE_USER = 'HANDLE_UPDATE_USER';

export const fetchLoggedInUser = (userInfo, authState) => dispatch => {
  dispatch({ type: CLIENT_FETCH_START });
  axiosWithAuth(authState)
    .get(`profiles/${userInfo.sub}`)
    .then(res => {
      dispatch({ type: CLIENT_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CLIENT_FETCH_FAILURE, payload: err });
    });
  dispatch({ type: SET_AUTH_INFO, payload: [userInfo, authState] });
};

export const updateUser = (updatedUserProfile, authState) => dispatch => {
  axiosWithAuth(authState)
    // send the updates to the server
    .put('/profiles', updatedUserProfile)
    .then(res => {
      // handles the response sets res to state
      dispatch({ type: HANDLE_UPDATE_USER, payload: res.data.profile });
    })
    .catch(err => {
      // replace
      console.log('ERROR IN ACTION:', err);
    });
};
