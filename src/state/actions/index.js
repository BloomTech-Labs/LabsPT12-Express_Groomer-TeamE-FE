import axiosWithAuth from '../../api/axiosWithAuth';

// API fetch statuses
export const FETCH_START = 'FETCH_START';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// loggedInUserData in state: grabs data of logged in user
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';

// loggedInUserData in state: updates the logged in user data.
export const HANDLE_UPDATE_USER = 'HANDLE_UPDATE_USER';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// LoggedInUsersBusinesses: get all business owned by the loggedInUser
export const FETCH_USER_BUSINESSES = 'FETCH_USER_BUSINESSES';
export const CREATE_USER_BUSINESS = 'CREATE_USER_BUSINESS';

export const HANDLE_UPDATE_BUSINESS = 'HANDLE_UPDATE_BUSINESS';

// LoggedInUsersPets: gets all the pets owned by the loggedInUser
export const FETCH_USER_PETS = 'FETCH_USER_PETS';

// AddPet: sends a post requests and adds pet to the user account
export const ADD_PET_SUCCESS = 'ADD_PET_SUCCESS';

export const fetchLoggedInUser = (userInfo, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`profiles/${userInfo.sub}`)
    .then(res => {
      dispatch({ type: USER_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
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

export const createBusiness = (businessData, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .post('/business', businessData)
    .then(res => {
      dispatch({ type: CREATE_USER_BUSINESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const getBusinessesByUserId = (id, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`/business/${id}`)
    .then(res => {
      dispatch({ type: FETCH_USER_BUSINESSES, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const updateBusiness = (
  id,
  updatedGroomerProfile,
  authState
) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .put(`/business/${id}`, updatedGroomerProfile)
    .then(res => {
      dispatch({ type: HANDLE_UPDATE_BUSINESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

// export const getPetsByUserId = (userInfo, authState) => dispatch => {
//     dispatch({ type: FETCH_START });
//     getPetsByUserId(authState, userInfo.sub)
//     .then(res => {
//         dispatch({ type: FETCH_USER_PETS, payload: res.data})
//     })
//     .catch(err => {
//         dispatch({ type: FETCH_FAILURE, payload: err })
//     })
// }

export const getPetsByUserId = (userInfo, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`/profiles/${userInfo.sub}/pets`)
    .then(res => {
      dispatch({ type: FETCH_USER_PETS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const addPet = (petData, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .post('/pet/', petData)
    .then(res => {
      dispatch({ type: ADD_PET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

// export const deletePet = ()
