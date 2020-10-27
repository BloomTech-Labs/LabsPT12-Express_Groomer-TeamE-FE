import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setHandleRole, updateUserRole } from '../../../state/actions';

const OnBoardingContainer = props => {
  let history = useHistory();
  console.log('USER DATA 2', props.loggedInUserData);

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

  const onSubmit = e => {
    e.preventDefault();
    const updatedUserProfile = {
      ...props.loggedInUserData,
      role: role.role,
    };
    props.setHandleRole(role.role);
    props.updateUserRole(updatedUserProfile, props.authState);

    console.log('AFTER SUBMIT:', props.authState);

    if (props.loggedInUserData.role === 'client') {
      history.push('/onboardingClient');
    } else if (props.loggedInUserData.role === 'groomer') {
      history.push('/onboardingGroomer');
    } else {
      history.push('/');
    }
  };

  console.log('USER DATA:', props);

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
    loggedInUserData: state.loggedInUserData,
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { setHandleRole, updateUserRole })(
  OnBoardingContainer
);
