import axiosWithAuth from '../../api/axiosWithAuth';

// Initial authState & UserInfo in HomeContainer set to state
// for future axios calls this is required per the server middleware
export const SET_AUTH_INFO = 'SET_AUTH_INFO';

// Get User by ID fetch status
export const CLIENT_FETCH_START = 'CLIENT_FETCH_START';
export const CLIENT_FETCH_SUCCESS = 'CLIENT_FETCH_SUCCESS';
export const CLIENT_FETCH_FAILURE = 'CLIENT_FETCH_FAILURE';

// sets role to state for OnBoarding in Container
export const HANDLE_ONBOARD_ROLE = 'HANDLE_ONBOARD_ROLE';

// updated user profile including new role
export const UPDATE_USER_ROLE = 'UPDATE_USER_ROLE';

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

export const setHandleRole = role => dispatch => {
  console.log('ACTION:', role);
  dispatch({ type: HANDLE_ONBOARD_ROLE, payload: role });
};

export const updateUserRole = (updatedUserProfile, authState) => dispatch => {
  axiosWithAuth(authState)
    .put('/profiles', updatedUserProfile)
    .then(res => {
      // replace
      console.log('RES IN ACTIONS:', res);
    })
    .catch(err => {
      // replace
      console.log('ERROR IN ACTION:', err);
    });
};
