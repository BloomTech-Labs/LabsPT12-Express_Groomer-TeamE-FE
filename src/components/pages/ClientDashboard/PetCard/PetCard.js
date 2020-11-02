import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePet } from '../../../../state/actions/index';
import { useOktaAuth } from '@okta/okta-react';
import './PetCard.css';

// icons
import needleRed from '../../../../assets/needleRed.png';
import needleGreen from '../../../../assets/needleGreen.png';
import edit from '../../../../assets/edit.png';
import trash from '../../../../assets/trash.png';

const PetCard = props => {
  const { authState, authService } = useOktaAuth();
  let history = useHistory();

  const handleUpdatePet = () => {
    history.push(`/updatePet/${props.pet.name}`);
  };

  const handleDeletePet = id => {
    let userResponse = window.confirm(
      `Are you sure you'd like to delete ${props.pet.name}?`
    );
    // redux action to delete pet.
    if (userResponse === true) {
      props.deletePet(id, authState);
      // refreshes the page so update will show.
      window.location.reload(false);
    } else {
      return null;
    }
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
          onClick={() => handleUpdatePet()}
          src={edit}
          alt="edit pet button."
        />
        <img
          className="petIcon"
          onClick={() => handleDeletePet(props.pet.id)}
          src={trash}
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
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { deletePet })(PetCard);
