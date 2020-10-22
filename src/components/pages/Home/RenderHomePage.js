import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import axiosWithAuth from '../../../api/axiosWithAuth';

// components
import OnBoardingForm from '../userOnBoarding/userOnBoardingForm';
import ClientDashboard from '../ClientDashboard/ClientDashboard';
import GroomerDashboard from '../GroomerDashoard/GroomerDashboard';

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

  console.log('User State', userState);

  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Express Groomer!</h1>
      {/* <div>
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
      </div> */}
      {userState === undefined ? (
        <h1>State Loading...</h1>
      ) : userState.role ? null : (
        <OnBoardingForm />
      )}
      {userState === undefined ? (
        <h1>State Loading...</h1>
      ) : userState.role === 'client' ? (
        <ClientDashboard />
      ) : null}
      {userState === undefined ? (
        <h1>State Loading...</h1>
      ) : userState.role === 'groomer' ? (
        <GroomerDashboard />
      ) : null}
    </div>
  );
}
export default RenderHomePage;
