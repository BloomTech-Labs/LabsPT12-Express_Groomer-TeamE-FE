import React, { useState } from 'react';
<<<<<<< HEAD
import GroomerProfile from '../componentProgress/GroomerProfile';
=======
import { useHistory } from 'react-router-dom';
>>>>>>> a39ccdd33ae9e2d30a2f7a118960cca463345fdd

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
    window.localStorage.setItem('role', role.role);
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
<<<<<<< HEAD
      <GroomerProfile/>
    </>
=======

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
>>>>>>> a39ccdd33ae9e2d30a2f7a118960cca463345fdd
  );
};

export default OnBoardingContainer;
