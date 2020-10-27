import axios from 'axios';

const axiosWithAuth = authState => {
  return axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
      Authorization: `Bearer ${authState.idToken}`,
    },
  });
};

export default axiosWithAuth;
