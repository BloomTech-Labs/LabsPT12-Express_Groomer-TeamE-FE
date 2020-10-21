import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import './RenderHomePage.css';

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  return (
    <div className="page">
      <div className="topBox"></div>
      <h1>Hi {userInfo.name} Welcome to Express Groomer!</h1>
      <div>
        <div className="nav-bar">
          <p className="links one">
            <Link to="/profile-list">Profiles Example</Link>
          </p>
          <p className="links two">
            <Link to="/example-list">Example List of Items</Link>
          </p>
          <p className="links three">
            <Link to="/datavis">Data Visualizations Example</Link>
          </p>
          <p>
            <Button
              handleClick={() => authService.logout()}
              buttonText="Logout"
            />
          </p>
        </div>
        {/* <p className="description">
          Do you need a groomer? No problem! We're able to help you find the
          perfect groomer near you.
        </p> */}
      </div>
      <div className="bottomBox"></div>
    </div>
  );
}
export default RenderHomePage;
