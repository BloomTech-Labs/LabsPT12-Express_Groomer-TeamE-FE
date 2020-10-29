import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPet } from '../../../../state/actions/index';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const AddPetForm = props => {
  const { authState, authService } = useOktaAuth();
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
    history.push('/');
  };

  return (
    <div className="AddPetForm">
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
