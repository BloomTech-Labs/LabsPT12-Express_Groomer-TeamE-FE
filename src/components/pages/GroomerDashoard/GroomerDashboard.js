import React from 'react';
import { useHistory } from 'react-router-dom';
import './GroomerDashboard.css';

// IconCard
import IconCard from '../../IconCards/IconCard';

// Icons
import email from '../../../assets/email-blue.png';
import appointment from '../../../assets/appointment.png';
import suitcase from '../../../assets/suitcase.png';
import view from '../../../assets/eye.png';

const GroomerDashboard = () => {
  let history = useHistory();
  let key = 0;
  let id = 0;

  const handleClick = clickType => {
    if (clickType === 'viewProfile') {
      history.push('/groomerProfile');
    }
  };

  return (
    <div>
      <div className="clientDashContainer">
        <div className="groomerHeader">
          <h1>Groomer Dashboard</h1>
          <div className="groomerIcons">
            <div
              className="viewBusinessPage"
              onClick={() => handleClick('viewProfile')}
            >
              <img
                className="eye"
                src={view}
                alt="icon hovering over suitcase of eye click to view business page."
              />
              <img
                src={suitcase}
                alt="icon suitcase click to view business page"
              />
            </div>
            <img
              className="email"
              src={email}
              alt="email icon, click to go to your inbox."
            />
          </div>
        </div>
      </div>
      <div className="appointmentContainer">
        <div className="appointmentHeader">
          <img
            className="groomerAppointments"
            src={appointment}
            alt="Icon of groomer appointments"
          />
          <h2>Upcoming Appointments</h2>
        </div>
      </div>
    </div>
  );
};

export default GroomerDashboard;
