import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// styles
import './UpdatePetForm.css';

const UpdatePetForm = () => {
  const { id } = useParams();

  useEffect(() => {}, [id]);

  return (
    <div>
      <h1>UPDATE PET FORM</h1>
    </div>
  );
};

export default UpdatePetForm;
