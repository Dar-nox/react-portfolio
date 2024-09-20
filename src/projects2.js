import React from 'react';
import './projects.css';
import myImage2 from './Images/ecoimpact.png';

function Card2() {
  return (
    <div className="card">
      <img className="card-image" src={myImage2} alt="Eco Impact" />
      <div className="card-content">
        <h1 className="card-title">Eco Impact</h1>
        <p className="card-description">A mobile application made to instill ecological awareness to its variety of users. It features quests, a virtual garden, and more!</p>
      </div>
      <div className="card-button">
        <button className="card-button-text">View Project</button>
      </div>
    </div>
  );
}
export default Card2;