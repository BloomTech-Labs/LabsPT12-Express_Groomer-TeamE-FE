import React from 'react';
import './PetCard.css';

// icons
import needleRed from '../../../../assets/needleRed.png';
import needleGreen from '../../../../assets/needleGreen.png';
import edit from '../../../../assets/edit.png';
import trash from '../../../../assets/trash.png';

// images
import pet1 from '../../../../assets/dummyPhotos/pet1.jpg';

const PetCard = props => {
  console.log('NAME:', props.pet.name);
  return (
    <div id={props.id} className="petCard">
      <div className="imgContainer">
        <img className="petImg" src={props.pet.photo} />
      </div>
      <div className="txtContainer">
        <p>{props.pet.name}</p>
        <p className="info">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap
        </p>
      </div>
      <div className="btmSection">
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
    </div>
  );
};

export default PetCard;
