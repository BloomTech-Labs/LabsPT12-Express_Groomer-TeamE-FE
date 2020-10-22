import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const OnBoardingContainer = () => {
  let history = useHistory();

  const [role, setRole] = useState({
    role: '',
  });

  const handleChange = e => {
    const formData = {
      ...role,
      [e.target.name]: e.target.value,
    };
    setRole(formData);
  };

  const onSubmit = () => {
    if (role.role === 'client') {
      history.push('/onboardingClient');
    } else {
      history.push('/onboardingGroomer');
    }
  };

  console.log(role);

  return (
    <div>
      <h1>Welcome To Express Groomer!</h1>
      <h2>Let's Get Started</h2>

      <div>
        <form onSubmit={onSubmit}>
          <label>
            <select
              placeholder="role"
              type="text"
              name="role"
              value={role.role}
              onChange={handleChange}
            >
              <option value="none">Choose Account Type</option>
              <option value="groomer">Groomer</option>
              <option value="client">Client</option>
            </select>
          </label>
        </form>
        <button onClick={onSubmit}>Continue</button>
      </div>
    </div>
  );
};

export default OnBoardingContainer;
