import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updatePet, getPetByPetId } from '../../../../state/actions/index';
import { useOktaAuth } from '@okta/okta-react';
import { useParams, useHistory } from 'react-router-dom';

// styles
import './UpdatePetForm.css';

// Photos
import logo from '../../../../assets/Logo.png';

const UpdatePetForm = props => {
  let Params = useParams();
  let History = useHistory();
  const { authState } = useOktaAuth();
  const { id } = useParams();

  const [data, setData] = useState({
    name: '',
    type: '',
    photo: '',
    notes: '',
  });

  const handleChange = e => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedPetData = {
      ...props.petFoundById,
      id: Params.id,
      name: data.name,
      type: data.type,
      photo: data.photo,
      notes: data.notes,
    };
    props.updatePet(updatedPetData, authState);
    return History.push('/PetPortal');
  };

  const handleCancel = e => {
    e.preventDefault();
    History.push('PetPortal');
  };

  useEffect(() => {
    props.getPetByPetId(Params.id, authState);
  }, [id]);

  return (
    <div>
      <div className="PetManagementHeader">
        <img className="logo" src={logo} alt="Express Groomer Logo." />
      </div>
      <form className="updatePetForm">
        <input
          type="text"
          placeholder={props.petFoundById.name}
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={props.petFoundById.type}
          name="type"
          value={data.type}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={props.petFoundById.photo}
          name="photo"
          value={data.photo}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={props.petFoundById.notes}
          name="notes"
          value={data.notes}
          onChange={handleChange}
        />
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    petFoundById: state.petFoundById,
  };
};

export default connect(mapStateToProps, { updatePet, getPetByPetId })(
  UpdatePetForm
);
