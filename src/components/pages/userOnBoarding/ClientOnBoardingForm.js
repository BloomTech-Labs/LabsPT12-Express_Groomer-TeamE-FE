import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { updateUser, fetchLoggedInUser } from '../../../state/actions/index';

const ClientOnBoardingForm = props => {
  const { authState, authService } = useOktaAuth();
  let AuthInfo = JSON.parse(window.localStorage.getItem('okta-token-storage'));

  let history = useHistory();

  const User = {
    id: AuthInfo.idToken.claims.sub,
  };

  const [data, setData] = useState({
    bannerUrl: '',
    address: '',
  });

  const [error, setError] = useState({
    bannerUrl: '',
    address: '',
  });

  useEffect(() => {
    props.fetchLoggedInUser(User, authState);
  }, []);

  const handleChange = e => {
    e.persist();
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedClientProfile = {
      ...props.loggedInUserData,
      bannerUrl: data.bannerUrl,
      address: data.address,
    };
    props.updateUser(updatedClientProfile, authState);
    return history.push('/');
  };

  return (
    <div>
      <h1>CLIENT HEY</h1>
      <h2>Please fill out other additional information</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="string"
            name="bannerUrl"
            placeholder="Image URL"
            value={data.bannerUrl}
            onChange={handleChange}
          />

          <br />
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={data.address}
            onChange={handleChange}
          />

          <br />
          <br />
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUserData: state.loggedInUserData,
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { updateUser, fetchLoggedInUser })(
  ClientOnBoardingForm
);
