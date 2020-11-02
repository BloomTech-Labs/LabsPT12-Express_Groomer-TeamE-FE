import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchLoggedInUser,
  getPetsByUserId,
} from '../../../../state/actions/index';
import './PetCardContainer.css';

//components
import PetCard from '../PetCard/PetCard';

const PetCardContainer = props => {
  let windowAuthState = window.localStorage.getItem('okta-token-storage');
  let AuthInfo = JSON.parse(windowAuthState);

  const AuthState = {
    accessToken: AuthInfo.accessToken.accessToken,
    idToken: AuthInfo.idToken.idToken,
  };

  const UserInfo = {
    sub: AuthInfo.idToken.claims.sub,
  };

  useEffect(() => {
    props.getPetsByUserId(UserInfo, AuthState);
  }, []);

  return (
    <div className="petCardContainer">
      {props.loggedInUsersPets ? (
        props.loggedInUsersPets.map(pet => {
          return (
            <PetCard
              key={pet.id}
              pet={pet}
              handleUpdatePet={props.handleUpdatePet}
            />
          );
        })
      ) : (
        <p>Please, Add a pet!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchLoggedInUser: state.fetchLoggedInUser,
    loggedInUsersPets: state.loggedInUsersPets,
  };
};

export default connect(mapStateToProps, { fetchLoggedInUser, getPetsByUserId })(
  PetCardContainer
);
