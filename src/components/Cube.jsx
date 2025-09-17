import React from 'react';
import './Cube.css';
import { Link } from 'react-router-dom';

const Cube = () => {
  return (
    <div className="cube-scene">
      <div className="cube">
        <Link to="/" className="face front">Home</Link>
        <Link to="/about" className="face back">About</Link>
        <Link to="/projects" className="face right">Projects</Link>
        <Link to="/skills" className="face left">Skills</Link>
        <Link to="/resume" className="face top">Resume</Link>
        <Link to="/contact" className="face bottom">Contact</Link>
      </div>
    </div>
  );
};

export default Cube;
