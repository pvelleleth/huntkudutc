// TeamPage.js
import React from 'react';
import './TeamPage.css';

const TeamPage = () => {
  const teamData = [
    {
      name: 'Pranav Velleleth',
      image: 'pranvell.jpg', // Replace with the actual image path
      description: "Our most resilient runner. He got a hamstring injury earlier this season, but is back building his fitness to what it used to be. He owns PRs of 4:33 mile and 2:02 800. He was also part of last year's 8 flat outdoor performance in the 4x8. Nationals ain't ready for him.",
    },
    {
      name: 'Matthew Ruby',
      image: 'mattruby.jpg', // Replace with the actual image path
      description: "The best long distance runner on TJ's track team, Matthew is pumped to be headed to New Balance Nationals. He qualified for states in three events, and his PRs are 15:54 5k, 9:37 2 mile, 4:26 mile, and 2:01 for the 800. He is super excited to be joining the 4x800 in Boston.",
    },
    {
      name: 'Luke Flecker',
      image: 'lukefleck.jpg', // Replace with the actual image path
      description: 'Luke is our most locked in runner. When he races, he shows no pain. He is primed for nationals and knows he has that sub 2 performance in him. He just missed the mile state qual by 0.3 seconds and is looking for vengeance at nationals. Anyone racing the third leg has to watchout for luke. He own PRs of 4:27 mile and 2:00 800.',
    },
    {
      name: 'Ryan Power',
      image: 'ryanpower.jpg', // Replace with the actual image path
      description: "Ryan is the best middle distance runner TJ has had in a long time. He has our fastest 800 split and he's got a lot of speed in him. Ryan was also in last year's 8 flat performance in the 4x8. Ryan has PRs of 1:11 500, 2:33 1k, and 1:58 800.",
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
