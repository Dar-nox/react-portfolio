import React from 'react';
import './projects.css';
import myImage3 from './Images/trafficlights.png';

function Card3() {
  return (
    <div className="card">
      <img className="card-image" src={myImage3} alt="Smart Traffic Lights" />
      <div className="card-content">
        <h1 className="card-title">Smart Traffic Lights</h1>
        <p className="card-description">A software made to reduce traffic in Lipa City's most crowded intersections. It uses AI to manage the traffic lights more efficiently.</p>
      </div>
      <div className="card-button">
        <button className="card-button-text">View Project</button>
      </div>
    </div>
  );
}
export default Card3;