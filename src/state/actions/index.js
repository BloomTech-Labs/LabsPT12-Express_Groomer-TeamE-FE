import axiosWithAuth from '../../api/axiosWithAuth';

// API fetch success & failure
export const FETCH_START = 'FETCH_START';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// Fetch loggedInUserData
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';

// Update user Data
export const HANDLE_UPDATE_USER = 'HANDLE_UPDATE_USER';

// update pet success
export const ADD_PET_SUCCESS = 'ADD_PET_SUCCESS';

// delete pet success
export const DELETE_PET_SUCCESS = 'DELETE_PET_SUCCESS';

// LoggedInUsersPets: gets all the pets owned by the loggedInUser
export const FETCH_USER_PETS = 'FETCH_USER_PETS';

export const fetchLoggedInUser = (user, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`profiles/${user.sub}`)
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

export const getPetsByUserId = (user, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`/profiles/${user.id}/pets`)
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

export const deletePet = (petId, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .delete(`/pet/${petId}`)
    .then(res => {
      dispatch({ type: DELETE_PET_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};
