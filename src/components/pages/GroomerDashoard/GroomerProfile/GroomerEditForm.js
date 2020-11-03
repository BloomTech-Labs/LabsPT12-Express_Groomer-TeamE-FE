import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../../api/axiosWithAuth';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

// Styling
import styled from 'styled-components';

// Styles
const PopUpFormContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);

  .inner-popUp {
    position: absolute;
    left: 20%;
    right: 20%;
    top: 10%;
    margin: auto;
    border-radius: 10px;
    ${'' /* background: white; */}
    background:#1ECBE1;
  }
  .form-container {
    width: 85%;
    margin: 0 auto;
    border: solid 1px black;
    border-radius: 5%;
    background: white;

    .form-header {
      h1 {
        text-align: center;
      }
      .ant-avatar {
        margin: 10px auto;
        display: block;
      }
    }
  }

  form {
    display: flex;
    justify-content: space-evenly;
  }
  .right-side {
  }
  .left-side {
    width: 45%;

    input {
      width: 100%;
    }
  }

  label {
    font-size: 15px;
    font-weight: bold;
    display: block;
    margin: 3px 0;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
  }

  .form-buttons {
    text-align: center;

    button {
      padding: 15px;
    }
  }
`;

const GroomerEditForm = props => {
  console.log(props);

  function handleClose() {
    props.setShowPopUp(false);
  }

  return (
    <PopUpFormContainer className="popUp-form-container">
      <div className="inner-popUp">
        <div className="form-container">
          <div className="form-header">
            <Avatar size={45} icon={<UserOutlined />} />
            <h1>Edit Your Profile</h1>
          </div>
          <form>
            <div className="left-side">
              <label htmlFor="businessName">Business Name: </label>
              <input
                name="businessName"
                type="textarea"
                value={props.groomerData.name}
              />

              <label htmlFor="phoneNumber">Phone Number: </label>
              <input name="phoneNumber" type="textarea" value="999-999-999" />

              <label htmlFor="email">Email: </label>
              <input
                name="email"
                type="textarea"
                value={props.groomerData.email}
              />

              <label htmlFor="address">Address: </label>
              <input
                name="address"
                type="textarea"
                value={props.groomerData.address}
              />
              <label htmlFor="City">City: </label>
              <input
                name="city"
                type="textarea"
                value={props.groomerData.address}
              />
              <label htmlFor="state">State: </label>
              <input
                name="State"
                type="textarea"
                value={props.groomerData.address}
              />
              <label htmlFor="zip">Zip: </label>
              <input
                name="zip"
                type="textarea"
                value={props.groomerData.address}
              />
            </div>
            <div className="right-side">
              <label htmlFor="operationHours">Hours Of Operations: </label>
              <input name="operationHours" type="textarea" value="Edit this" />
            </div>
          </form>
          <div className="form-buttons">
            <button>Update</button>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </PopUpFormContainer>
  );
};

export default GroomerEditForm;
