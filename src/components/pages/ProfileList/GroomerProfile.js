import React from 'react';

const ProfileList = () => {
  const { authState } = useOktaAuth();

  return (
    <h1>Groomers Profiles here</h1>
  );
};

export default GroomerProfile;