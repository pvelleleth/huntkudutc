// TeamPage.js
import React from 'react';
import './TeamPage.css';

const TeamPage = () => {
  const teamData = [
    {
      name: 'Pranav Velleleth',
      image: 'pranvell.jpg', // Replace with the actual image path
      description: '',
    },
    {
      name: 'Matthew Ruby',
      image: 'mattruby.jpg', // Replace with the actual image path
      description: '',
    },
    {
      name: 'Luke Flecker',
      image: 'lukefleck.jpg', // Replace with the actual image path
      description: '',
    },
    {
      name: 'Ryan Power',
      image: 'ryanpower.jpg', // Replace with the actual image path
      description: '',
    },
  ];

  return (
    <div className="team-page">
      <h1>Meet the Team</h1>
      <div className="athlete-container">
        {teamData.map((athlete, index) => (
          <div key={index} className="athlete-card">
            <img src={require(`./${athlete.image}`)} alt={athlete.name} className="athlete-image" />
            <div className="athlete-details">
              <h2>{athlete.name}</h2>
              <p>{athlete.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
