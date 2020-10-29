import axios from 'axios';
// import axiosWithAuth from './axiosWithAuth';
// import { useOktaAuth } from '@okta/okta-react';
// import AuthService from '@okta/okta-react/src/AuthService';

// const { authState, authService } = useOktaAuth();
// let userInfo = {}
// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

// const getPetsByUserId = (userId) => {
//     getUserInfo()
//     return axiosWithAuth(authState).get(`/profiles/${userInfo.sub}/pets`)
// }

// const getUserInfo = () => {
//   if (!userInfo){
//     authService
//      .getUser()
//      .then(info => {
//        if (info){
//          userInfo = info
//        }
//      })
//      .catch(err => {
//        console.log(err)
//      });
//   }
// }

export { sleep, getProfileData };
