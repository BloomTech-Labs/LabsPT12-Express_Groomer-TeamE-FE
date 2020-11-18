import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateBusiness,
  getBusinessesByUserId,
} from '../../../state/actions/index';
import './GroomerOnBoardingForm.css';

const GroomerOnBoardingForm = props => {
  let history = useHistory();
  let { id } = useParams();

  let windowAuthState = window.localStorage.getItem('okta-token-storage');
  let AuthInfo = JSON.parse(windowAuthState);

  const AuthState = {
    accesToken: AuthInfo.accessToken.accessToken,
    idToken: AuthInfo.idToken.idToken,
  };

  const [data, setData] = useState({
    name: '',
    banner_photo: '',
    address: '',
    description: '',
    phone: '',
    availability: '',
  });

  useEffect(() => {
    props.getBusinessesByUserId(id, AuthState);
  }, []);

  const handleChange = e => {
    e.persist();
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedGroomerProfile = {
      ...props.loggedInUsersBusinesses,
      name: data.name,
      banner_photo: data.banner_photo,
      address: data.address,
      description: data.description,
      phone: data.phone,
      availability: data.availability,
    };
    props.updateBusiness(id, updatedGroomerProfile, AuthState);
    return history.push('/');
  };

  const handleSkip = e => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <div className="groomer-form">
      <h1>YO Groomer</h1>
      <h2>Please fill out other additional information</h2>
      <div className="groomer-input">
        <form onSubmit={handleSubmit}>
          <input
            type="string"
            name="name"
            placeholder="Business Name"
            value={data.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="string"
            name="banner_photo"
            placeholder="Image URL"
            value={data.banner_photo}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={data.address}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="description"
            placeholder="description"
            value={data.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={data.phone}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="availability"
            placeholder="availability"
            value={data.availability}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
          <button type="submit" onSubmit={handleSkip}>
            Skip
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUsersBusinesses: state.loggedInUsersBusinesses,
    authState: state.authState,
  };
};

export default connect(mapStateToProps, {
  updateBusiness,
  getBusinessesByUserId,
})(GroomerOnBoardingForm);
