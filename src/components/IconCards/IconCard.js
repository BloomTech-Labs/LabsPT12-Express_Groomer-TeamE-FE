import React from 'react';
import './IconCard.css';

const IconCard = props => {
  console.log('PROPS:', props);
  return (
    <div className="iconCard" onClick={() => props.handleClick(props.id)}>
      <img className="iconImg" src={props.icon} alt="userIcon" />
    </div>
  );
};

export default IconCard;
