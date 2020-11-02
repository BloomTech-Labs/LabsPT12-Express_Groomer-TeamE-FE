import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import {
  fetchLoggedInUser,
  getPetsByUserId,
} from '../../../../state/actions/index';
import './PetCardContainer.css';

//components
import PetCard from '../PetCard/PetCard';

const PetCardContainer = props => {
  const { authState } = useOktaAuth();
  let AuthInfo = JSON.parse(window.localStorage.getItem('okta-token-storage'));

  const User = {
    id: AuthInfo.idToken.claims.sub,
  };

  useEffect(() => {
    props.getPetsByUserId(User, authState);
  }, []);

  return (
    <div className="petCardContainer">
      {props.loggedInUsersPets ? (
        props.loggedInUsersPets.map(pet => {
          return <PetCard key={pet.id} pet={pet} />;
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
