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
    border-radius: 20px;  
    background: white;
  }
`;

const GroomerEditForm = (props) => {

  useEffect(() =>{
  },[])

  return (
      <PopUpFormContainer className = "popUp-form-container">
        <div className="inner-popUp">
            <h1>Edit Your Profile</h1>
        </div>
      </PopUpFormContainer>
  );
};

export default GroomerEditForm;