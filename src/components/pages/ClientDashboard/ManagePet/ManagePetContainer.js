import React from 'react';
import './ManagePetContainer.css';

// Photos
import logo from '../../../../assets/Logo.png';
import darkAdd from '../../../../assets/plusDark.png';
import lightAdd from '../../../../assets/plusLight.png';

const ManagePetContainer = () => {
  return (
    <div>
      <div className="PetManagementHeader">
        <img className="logo" src={logo} alt="Express Groomer Logo." />
      </div>
      <div className="petBtnContainer">
        <img className="darkAdd" src={darkAdd} alt="Plus button to add pet." />
        <img
          className="lightAdd"
          src={lightAdd}
          alt="Plus button to add pet."
        />
      </div>
    </div>
  );
};

export default ManagePetContainer;
