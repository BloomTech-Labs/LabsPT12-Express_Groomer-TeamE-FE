import React, { useState } from 'react';
import GroomerProfile from '../componentProgress/GroomerProfile';

const OnBoardingContainer = () => {
  const [persona, setPersona] = useState();

  return (
    <>
      <h1>Welcome To Express Groomer!</h1>
      <h2>Let's Get Started</h2>
      <GroomerProfile/>
    </>
  );
};

export default OnBoardingContainer;
