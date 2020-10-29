import React from 'react';
import './PetCard.css';

// icons
import needleRed from '../../../../assets/needleRed.png';
import needleGreen from '../../../../assets/needleGreen.png';
import edit from '../../../../assets/edit.png';
import trash from '../../../../assets/trash.png';

const PetCard = props => {
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
        <img className="petIcon" src={edit} alt="edit pet button." />
        <img className="petIcon" src={trash} alt="delete pet button." />
      </div>
      <div className="txtContainer">
        <p>{props.pet.name}</p>
        <p className="info">{props.pet.notes}</p>
      </div>
    </div>
  );
};

export default PetCard;
