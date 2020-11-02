import React, { useState, useEffect } from 'react';
import './ManagePetContainer.css';

// components
import PetCardContainer from '../PetCardContainer/PetCardContainer';
import AddPetForm from '../AddPetForm/AddPetForm';
import UpdatePetForm from '../UpdatePetForm/UpdatePetForm';

// Photos
import logo from '../../../../assets/Logo.png';
import darkAdd from '../../../../assets/plusDark.png';
import lightAdd from '../../../../assets/plusLight.png';

const ManagePetContainer = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddPet = e => {
    setIsAdding(!isAdding);
  };

  const handleUpdatePet = () => {
    setIsUpdating(!isUpdating);
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

      {isAdding === false ? (
        isUpdating === false ? (
          <PetCardContainer handleUpdatePet={handleUpdatePet} />
        ) : (
          <UpdatePetForm />
        )
      ) : (
        <AddPetForm isAdding={isAdding} setIsAdding={setIsAdding} />
      )}
    </div>
  );
};

export default ManagePetContainer;
