import axios from 'axios';

const axiosWithAuth = authState => {
  return axios.create({
    baseURL: 'https://labspt12-express-groomer-e-api.herokuapp.com/',
    headers: {
      Authorization: `Bearer ${authState.idToken}`,
    },
  });
};

export default axiosWithAuth;
