import React from 'react';
import './projects.css';
import myImage3 from './Images/trafficlights.png';

function Card3({ image, title, description }) {
  return (
    <div className="card">
      <img className="card-image" src={myImage3} alt="Smart Traffic Lights" />
      <div className="card-content">
        <h3 className="card-title">Smart Traffic Lights</h3>
        <p className="card-description">A software made to reduce traffic in Lipa City's most crowded intersections. It uses AI to manage the traffic lights more efficiently.</p>
      </div>
    </div>
  );
}

export default Card3;