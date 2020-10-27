import React, { useState, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchLoggedInUser } from '../../../state/actions/index';
import { reducer, initialState } from '../../../state/reducers/index';
import { connect } from 'react-redux';

// components
import ClientDashboard from '../ClientDashboard/ClientDashboard';
import GroomerDashboard from '../GroomerDashoard/GroomerDashboard';

function RenderHomePage(props) {
  const { userInfo, authService, authState } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  let history = useHistory();

  useEffect(() => {
    // User Info doesn't get set because of the HomeContaineer condition to reder
    // This page. So, I'm setting a dispatch to update state with the user info needed
    // to run this fetch call.
    dispatch({ type: 'FETCH_USER_INFO', payload: userInfo });
    dispatch({ type: 'FETCH_AUTH_STATE', payload: authState });
    props.fetchLoggedInUser(userInfo, authState);
  }, [authState, userInfo]);

  return (
    <div>
      {/* Falsy statement checking to see if the user has a role assigned if not they're directed to the Onboarding Form to fill out information needed for their account */}

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
