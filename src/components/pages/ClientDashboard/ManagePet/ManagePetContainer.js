import React from 'react';
import { useHistory } from 'react-router-dom';
import './ManagePetContainer.css';

// components
import PetCardContainer from '../PetCardContainer/PetCardContainer';

// Photos
import logo from '../../../../assets/Logo.png';
import darkAdd from '../../../../assets/plusDark.png';
import lightAdd from '../../../../assets/plusLight.png';

const ManagePetContainer = () => {
  let history = useHistory();

  const handleAddPet = e => {
    history.push('/addPet');
  };

  return (
    <div className="PetManagementContainer">
      <div className="PetManagementHeader">
        <img className="logo" src={logo} alt="Express Groomer Logo." />
        <div className="petBtnContainer">
          <img
            className="darkAdd"
            src={darkAdd}
            alt="Plus button to add pet."
          />
          <img
            className="lightAdd"
            onClick={handleAddPet}
            src={lightAdd}
            alt="Plus button to add pet."
          />
        </div>
      </div>
      <PetCardContainer />
    </div>
  );
};

export default ManagePetContainer;
