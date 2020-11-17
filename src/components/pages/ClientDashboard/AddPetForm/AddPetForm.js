import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPet } from '../../../../state/actions/index';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Input, Button } from 'antd';
import './AddPetForm.css';

// photos
import logo from '../../../../assets/GroomerExpressLogo.png';

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
    history.push('/');
  };

  const handleCancel = e => {
    e.preventDefault();
    history.push('/petPortal');
  };

  const handleDashboardClick = () => {
    history.push('/');
  };

  return (
    <div className="addPetContainer">
      <div className="PetManagementHeader">
        <img
          onClick={handleDashboardClick}
          className="logo"
          src={logo}
          alt="Express Groomer Logo."
        />
      </div>
      <form className="addPetForm" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label className="formLabel">
            Name:
            <Input
              className="input"
              placeholder="Name"
              type="text"
              name="name"
              value={petState.name}
              onChange={handleChange}
            />
          </label>
          <label className="formLabel">
            Type:
            <Input
              className="input"
              placeholder="Type"
              type="text"
              name="type"
              value={petState.type}
              onChange={handleChange}
            />
          </label>
          <label className="formLabel">
            Photo Src:
            <Input
              className="input"
              placeholder="Insert Photo link"
              type="text"
              name="photo"
              value={petState.photo}
              onChange={handleChange}
            />
          </label>
          <label className="formLabel">
            Notes:
            <Input
              className="input"
              placeholder="Bio"
              type="text"
              name="notes"
              value={petState.notes}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="btnContainer">
          <Button className="canBtn" onClick={handleCancel}>
            Cancel
          </Button>
          {petState.name &&
          petState.type &&
          petState.photo &&
          petState.notes ? (
            <Button className="subBtn submit" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <div className="subBtn">Submit</div>
          )}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUsersPets: state.loggedInUsersPets,
  };
};

export default connect(mapStateToProps, { addPet })(AddPetForm);
