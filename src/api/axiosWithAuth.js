import axios from 'axios';

const axiosWithAuth = () => {
  const authState = localStorage.getItem('okta-token-storage');
  return axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
      Authorization: `Bearer ${authState.idToken}`,
    },
  });
};

export default axiosWithAuth;
