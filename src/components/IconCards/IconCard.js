import React from 'react';
import './IconCard.css';

const IconCard = props => {
  return (
    <div className="iconCard">
      <img className="iconImg" src={props.icon} alt="userIcon" />
    </div>
  );
};

export default IconCard;
