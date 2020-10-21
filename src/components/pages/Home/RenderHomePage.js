import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import axiosWithAuth from '../../../api/axiosWithAuth';
import AuthService from '@okta/okta-react/src/AuthService';

function RenderHomePage(props) {
  const { userInfo, authService, authState } = props;
  const [userState, setUserState] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get(`profiles/${userInfo.sub}`, {
        headers: {
          Authorization: `Bearer ${authState.idToken}`,
        },
      })
      .then(res => {
        setUserState({ ...res.data });
      })
      .catch(err => {
        console.log('Error:', err);
      });
  }, [authState, userInfo]);

  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Express Groomer!</h1>
      <div>
        <p>
          Do you need a groomer? No problem! We're able to help you find the
          perfect groomer near you.
        </p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
