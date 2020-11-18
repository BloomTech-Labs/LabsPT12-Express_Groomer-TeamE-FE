import React from 'react';
import { useHistory } from 'react-router-dom';
import './ClientDashboard.css';

// Logo
import logo from '../../../assets/GroomerExpressLogo.png';

// IconCard
import IconCard from '../../IconCards/IconCard';

// icons
import userIcon from '../../../assets/profile-user.png';
import email from '../../../assets/email.png';
import search from '../../../assets/search.png';
import appointment from '../../../assets/appointment.png';
import pawprint from '../../../assets/pawprint.png';

const icons = [userIcon, email, search, appointment, pawprint];

const ClientDashboard = () => {
  let history = useHistory();
  let key = 0;
  let id = 0;

  const handleClick = id => {
    if (id === 5) {
      history.push('/PetPortal');
    }
  };

  const handleLogOut = () => {
    window.localStorage.clear(
      'okta-pkce-storage',
      'okta-cache-storage',
      'okta-token-storage'
    );
    history.push('/login');
  };

  return (
    <div className="clientDashContainer">
      <div className="clientHeader">
        <img className="logo" src={logo} alt="Express Groomer Logo." />
      </div>
      <p className="Logout" onClick={handleLogOut}>
        Log Out
      </p>
      <div className="cardContainer">
        {icons.map(icon => {
          return (
            <IconCard
              key={(key += 1)}
              id={(id += 1)}
              handleClick={handleClick}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClientDashboard;
