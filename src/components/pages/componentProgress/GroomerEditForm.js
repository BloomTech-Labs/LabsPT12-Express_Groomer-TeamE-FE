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
    left: 25%;  
    right: 25%;  
    top: 25%;  
    bottom: 25%;  
    margin: auto;  
    border-radius: 10px;  
    background: white;
  }
`;

const GroomerEditForm = (props) => {
    console.log(props)

  useEffect(() =>{
  },[])

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
                />
                <label htmlFor ="phoneNumber">Phone Number: </label>
                <input
                    name = "phoneNumber"
                    type = "textarea"
                    value = '999-999-999'
                />
                <label htmlFor ="email">Phone Number: </label>
                <input
                    name = "email"
                    type = "textarea"
                    value = {props.groomerData.email}
                />
                <label htmlFor ="operationHours">Phone Number: </label>
                <input
                    name = "operationHours"
                    type = "textarea"
                    value = 'Edit this'
                />
                <label htmlFor ="address">Phone Number: </label>
                <input
                    name = "address"
                    type = "textarea"
                    value = {props.groomerData.address}
                />
                <label htmlFor ="bio">Phone Number: </label>
                <textarea
                    name = "bio"
                    type = "textarea"
                    value = "itur sapien a elit iaculis faucibus. Donec molestie, lacus et consequat luctus, odio mi sagittis lacus, vitae blandit nibh libero quis justo. Sed ac pellentesque augue, vitae vestibulum quam. Pellentesque at laoreet ligula. Nunc aliquet lacus urna, vitae eleifend risus venenatis sit amet. Donec pellentesque mollis tortor sed tincidunt. Vestibulum fermentum egestas quam, quis posuere nisl pretium ut. Praesent suscipit porttitor erat. Suspendiss"
                />

                <input 
                type ="submit"
                value ="Submit"
                />
            </form>
        </div>
      </PopUpFormContainer>
  );
};

export default GroomerEditForm;