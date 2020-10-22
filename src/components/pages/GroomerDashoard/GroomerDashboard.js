import React from 'react';
import './GroomerDashboard.css';

// Icons
import email from '../../../assets/email.png';

const GroomerDashboard = () => {
  return (
    <>
      <div className="groomerHeader">
        <h1>Groomer Dashboard</h1>
        <img className="msgIcon" src={email}></img>
      </div>
    </>
  );
};

export default GroomerDashboard;
