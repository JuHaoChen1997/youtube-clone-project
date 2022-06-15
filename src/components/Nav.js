import React from "react";
import About from './About'
import "./Nav.css";
<<<<<<< HEAD
=======

import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 8cf19fe1b41a95ff00e89fc998104321c5c8b0bc

  
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className="main">
        <div className="navbar">
          <img
            src="./components/YTLOGO2.jpeg"
            alt="Youtube Logo"
            width="15"
            height="15"
          />

          <Link to="/">
            <h2 className="home-button">Home</h2>
          </Link>
          <Link to="/About">
            <h2 className="about-button">About</h2>
          </Link>
        </div>
        <About/>
      </main>
    );
  }
}
export default Nav;
