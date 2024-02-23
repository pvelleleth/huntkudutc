import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to Hunt Kudu Track Club</h1>
          <p>We're headed to New Balance Nationals Indoor!</p>
          <Link to="/team" className="meet-the-team-button">
            Meet the Team
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
