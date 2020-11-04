import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPet } from '../../../../state/actions/index';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

// photos
import logo from '../../../../assets/Logo.png';

const AddPetForm = props => {
  const { authState } = useOktaAuth();
  let AuthInfo = JSON.parse(window.localStorage.getItem('okta-token-storage'));

  let history = useHistory();

  const User = {
    id: AuthInfo.idToken.claims.sub,
  };

  const [petState, setPetState] = useState({
    name: '',
    type: '',
    photo: '',
    notes: '',
    user_id: User.id,
  });

  const handleChange = e => {
    const newData = {
      ...petState,
      [e.target.name]: e.target.value,
    };
    setPetState(newData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addPet(petState, authState);
    history.push('/petPortal');
  };

  const handleCancel = e => {
    e.preventDefault();
    history.push('/petPortal');
  };

  return (
    <div className="AddPetForm">
      <div className="PetManagementHeader">
        <img className="logo" src={logo} alt="Express Groomer Logo." />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={petState.name}
          onChange={handleChange}
        />
        <input
          placeholder="Type"
          type="text"
          name="type"
          value={petState.type}
          onChange={handleChange}
        />
        <input
          placeholder="Insert Photo link"
          type="text"
          name="photo"
          value={petState.photo}
          onChange={handleChange}
        />
        <input
          placeholder="Bio"
          type="text"
          name="notes"
          value={petState.notes}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUsersPets: state.loggedInUsersPets,
  };
};

export default connect(mapStateToProps, { addPet })(AddPetForm);
