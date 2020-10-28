import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchLoggedInUser } from '../../../state/actions/index';
import { connect } from 'react-redux';

// components
import ClientDashboard from '../ClientDashboard/ClientDashboard';
import GroomerDashboard from '../GroomerDashoard/GroomerDashboard';


function RenderHomePage(props) {
  const { userInfo, authService, authState } = props;

  let history = useHistory();

  useEffect(() => {
    props.fetchLoggedInUser(userInfo, authState);
  }, [authState, userInfo]);

  return (
    <div>
      {props.loggedInUserData === undefined ? (
        <h1>State Loading...</h1>
      ) : props.loggedInUserData.role === 'new' ? (
        history.push('/onboarding')
      ) : null}
      {/* If the user role is a client then they'll be directed to the client dashboard */}
      {props.loggedInUserData === undefined ? null : props.loggedInUserData
          .role === 'client' ? (
        <ClientDashboard />
      ) : null}
      {/* If the user role is a groomer then they'll be directed to the groomer dashboard */}
      {props.loggedInUserData === undefined ? null : props.loggedInUserData
          .role === 'groomer' ? (
        <GroomerDashboard />
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedInUserData: state.loggedInUserData,
  };
};

export default connect(mapStateToProps, { fetchLoggedInUser })(RenderHomePage);
