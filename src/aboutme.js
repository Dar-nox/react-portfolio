import React from 'react';
import './aboutme.css';
function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="title">Hey.</h2>
      <p className="description">
        My name is <span className="myName">Conrad</span>, and I'm a <span className="highlight">beginner software developer</span>.
      </p>
      <div className="details">
        <p>I'm passionate about learning new technologies and creating innovative software applications.</p>
        <p>
          Some of my skills include:
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
export default AboutMe;