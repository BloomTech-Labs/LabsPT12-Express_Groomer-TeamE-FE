import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const GroomerProfile = () => {
  const { authState } = useOktaAuth();

  return (
    <h1>Groomers Profiles here</h1>
  );
};

export default GroomerProfile;