import axiosWithAuth from '../../api/axiosWithAuth';

export const CLIENT_FETCH_START = 'CLIENT_FETCH_START';
export const CLIENT_FETCH_SUCCESS = 'CLIENT_FETCH_SUCCESS';
export const CLIENT_FETCH_FAILURE = 'CLIENT_FETCH_FAILURE';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_AUTH_STATE = 'FETCH_AUTH_STATE';
export const HANDLE_ONBOARD_ROLE = 'HANDLE_ONBOARD_ROLE';

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
};

export const setHandleRole = role => dispatch => {
  console.log('ACTION:', role);
  dispatch({ type: HANDLE_ONBOARD_ROLE, payload: role });
};
