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
  // user state needs to be placed in redux
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
      {/* Falsy statement checking to see if the user has a role assigned if not they're directed to the Onboarding Form to fill out information needed for their account */}
      {userState === undefined ? (
        <h1>State Loading...</h1>
      ) : userState.role ? null : (
        <OnBoardingForm />
      )}
      {/* If the user role is a client then they'll be directed to the client dashboard */}
      {userState === undefined ? (
        <h1>State Loading...</h1>
      ) : userState.role === 'client' ? (
        <ClientDashboard />
      ) : null}
      {/* If the user role is a groomer then they'll be directed to the groomer dashboard */}
      {userState === undefined ? (
        <h1>State Loading...</h1>
      ) : userState.role === 'groomer' ? (
        <GroomerDashboard />
      ) : null}
    </div>
  );
}
export default RenderHomePage;
