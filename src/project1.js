import React from 'react';
import './projects.css';
import myImage from './Images/companion.png';

function Card1({ image, title, description }) {
  return (
    <div className="card">
      <img className="card-image" src={myImage} alt="Companion App" />
      <div className="card-content">
        <h3 className="card-title">Companion App</h3>
        <p className="card-description">A companion app made for DLSL students to improve their quality of life. It has multiple functions to help old and new students alike.</p>
      </div>
    </div>
  );
}

export default Card1;