import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { deletePet } from '../../../../state/actions/index';
import './PetCard.css';

// icons
import needleRed from '../../../../assets/needleRed.png';
import needleGreen from '../../../../assets/needleGreen.png';
import edit from '../../../../assets/edit.png';
import trash from '../../../../assets/trash.png';

const PetCard = props => {
  const { authState, authService } = useOktaAuth();

  const handleDelete = (id, name) => {
    let response = window.confirm(`Are you sure you'd like to delete ${name}?`);
    if (response === true) {
      props.deletePet(id, authState);
      window.location.reload(true);
    } else if (response === false) {
      return null;
    }
  };

  const handleUpdatePet = id => {
    props.handleUpdatePet(id);
  };

  return (
    <div className="petCard">
      <div className="imgContainer">
        <img className="petImg" src={props.pet.photo} />
      </div>
      <div className="btnSection">
        {props.pet.shots === true ? (
          <img
            className="petIcon"
            src={needleGreen}
            alt="immunization up to date with needle green."
          />
        ) : (
          <img
            className="petIcon"
            src={needleRed}
            alt="immunization out of date with needle red."
          />
        )}
        <img
          className="petIcon"
          src={edit}
          onClick={() => handleUpdatePet(props.pet.id)}
          alt="edit pet button."
        />
        <img
          className="petIcon"
          src={trash}
          onClick={() => handleDelete(props.pet.id, props.pet.name)}
          alt="delete pet button."
        />
      </div>
      <div className="txtContainer">
        <p>{props.pet.name}</p>
        <p className="info">{props.pet.notes}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { deletePet })(PetCard);
