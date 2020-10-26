import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../api/axiosWithAuth';
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
  background-color: rgba(0,0,0, 0.5);  

  .inner-popUp{
    position: absolute;  
    left: 15%;  
    right: 15%;  
    top: 15%;  
    bottom: 15%;  
    margin: auto;  
    border-radius: 10px;  
    background: white;
  }

  label{
      font-size:15px;
      font-weight:bold;
      display:inline;
  }
  input{
      width:50%;
      margin: 7px 0;
  }

  form{
      margin: 0 auto;
  }
`;

const GroomerEditForm = (props) => {
    console.log(props)

    function handleClose(){
        props.setShowPopUp(false)
    };

  return (
      <PopUpFormContainer className = "popUp-form-container">
        <div className="inner-popUp">
            <form>
                <h1>Edit Your Profile</h1>
                <label htmlFor ="businessName">Business Name: </label>
                <input
                    name = "businessName"
                    type = "textarea"
                    value ={props.groomerData.name}
                /><br/>

                <label htmlFor ="phoneNumber">Phone Number: </label>
                <input
                    name = "phoneNumber"
                    type = "textarea"
                    value = '999-999-999'
                /><br/>

                <label htmlFor ="email">Email: </label>
                <input
                    name = "email"
                    type = "textarea"
                    value = {props.groomerData.email}
                /><br/>

                <label htmlFor ="operationHours">Hours Of Operations: </label>
                <input
                    name = "operationHours"
                    type = "textarea"
                    value = 'Edit this'
                /><br/>

                <label htmlFor ="address">Address: </label>
                <input
                    name = "address"
                    type = "textarea"
                    value = {props.groomerData.address}
                /><br/>

                <label htmlFor ="bio">Bio: </label>
                <textarea
                    name = "bio"
                    type = "textarea"
                    rows = "7"
                    cols = "65"
                    maxlength = '250'
                    value = "itur sapien a elit iaculis faucibus. Donec molestie, lacus et consequat luctus, odio mi sagittis lacus, vitae blandit nibh libero quis justo. Sed ac pellentesque augue, vitae vestibulum quam. Pellentesque at laoreet ligula. Nunc aliquet lacus urna, vitae eleifend risus venenatis sit amet. Donec pellentesque mollis tortor sed tincidunt. Vestibulum fermentum egestas quam, quis posuere nisl pretium ut. Praesent suscipit porttitor erat. Suspendiss"
                />
            </form>
            <div className="form-buttons">
                <button>Update</button>
                <button onClick ={handleClose}>Close</button>
            </div>
        </div>
      </PopUpFormContainer>
  );
};

export default GroomerEditForm;