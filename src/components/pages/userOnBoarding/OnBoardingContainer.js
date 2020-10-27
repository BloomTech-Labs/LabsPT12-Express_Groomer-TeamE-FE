import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setHandleRole } from '../../../state/actions';

const OnBoardingContainer = props => {
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
    props.setHandleRole(role.role);
    if (role.role === 'client') {
      history.push('/onboardingClient');
    } else {
      history.push('/onboardingGroomer');
    }
  };

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

const mapStateToProps = state => {
  return {
    handle_role: state.handle_role,
  };
};

export default connect(mapStateToProps, { setHandleRole })(OnBoardingContainer);
