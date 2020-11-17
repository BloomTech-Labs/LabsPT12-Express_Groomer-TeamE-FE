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

// fetch pet by petId
export const FIND_PET_BYID = 'FIND_PET_BYID';

// LoggedInUsersBusinesses: get all business owned by the loggedInUser
export const FETCH_USER_BUSINESSES = 'FETCH_USER_BUSINESSES';
export const CREATE_USER_BUSINESS = 'CREATE_USER_BUSINESS';

export const HANDLE_UPDATE_BUSINESS = 'HANDLE_UPDATE_BUSINESS';

// LoggedInUsersPets: gets all the pets owned by the loggedInUser
export const FETCH_USER_PETS = 'FETCH_USER_PETS';

// update pet success
export const UPDATE_PET_SUCCESS = 'UPDATE_PET_SUCCESS';

export const fetchLoggedInUser = (user, authState) => dispatch => {
  console.log('IN ACTIONS:', user, authState);
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`profiles/${user.sub}`)
    .then(res => {
      console.log('RES & RES DATA:', res, res.data);
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

export const getPetByPetId = (petId, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .get(`/pet/${petId}`)
    .then(res => {
      dispatch({ type: FIND_PET_BYID, payload: res.data[0] });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const updatePet = (pet, authState) => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth(authState)
    .put(`/pet/${pet.id}`, pet)
    .then(res => {
      dispatch({ type: UPDATE_PET_SUCCESS, payload: res.data[0] });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};
