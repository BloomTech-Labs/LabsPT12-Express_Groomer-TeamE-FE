import React from 'react';

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
  return (
    <>
      <h1>Client Dashboard</h1>
      {icons.map(icon => {
        return <IconCard icon={icon} />;
      })}
    </>
  );
};

export default ClientDashboard;
