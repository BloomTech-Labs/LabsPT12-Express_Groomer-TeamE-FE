import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../api/axiosWithAuth';
// Styling
import styled from 'styled-components';

const GroomerEditForm = (props) => {
  const { authState } = useOktaAuth();
  const [groomerData, setGroomerData] = useState({})

  useEffect(() =>{
  },[])

  return (
      <div className = "edit-form">
        <h1>Form Goes Here</h1>
      </div>
  );
};

export default GroomerEditForm;