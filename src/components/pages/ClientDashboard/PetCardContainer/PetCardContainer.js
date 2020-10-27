import React, { useState, useEffect } from 'react';
import './PetCardContainer.css';
import axiosWithAuth from '../../../../api/axiosWithAuth';

// Petimages
import pet1 from '../../../../assets/dummyPhotos/pet1.jpg';
import pet2 from '../../../../assets/dummyPhotos/pet2.jpg';
import pet3 from '../../../../assets/dummyPhotos/pet3.jpg';

//components
import PetCard from '../PetCard/PetCard';

const dummyPets = [
  {
    id: 1,
    name: 'Fluffykins',
    type: 'cat',
    user_id: 'whh3298423ykdjsiy',
    shots: true,
    photo: pet1,
    notes: 'luyikadfsg cute',
  },
  {
    id: 2,
    name: 'Fluffykins',
    type: 'cat',
    user_id: 'whh3298423ykdjsiy',
    shots: false,
    photo: pet2,
    notes: 'luyikadfsg cute',
  },
  {
    id: 3,
    name: 'Fluffykins',
    type: 'cat',
    user_id: 'whh3298423ykdjsiy',
    shots: true,
    photo: pet3,
    notes: 'luyikadfsg cute',
  },
];

const PetCardContainer = () => {
  const [pets, setPets] = useState();

  useEffect(() => {
    setPets(dummyPets);
    // axiosWithAuth()
    // .get(`/:id/pets`)
    // .then(res => {
    //     console.log(res)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
  }, []);

  return (
    <div className="petCardContainer">
      {pets ? (
        pets.map(pet => {
          return <PetCard pet={pet} />;
        })
      ) : (
        <p>Fetching Pets</p>
      )}
    </div>
  );
};

export default PetCardContainer;
