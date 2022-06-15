import React from "react";
import About from './About'
import "./Nav.css";

  
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

          <h2 className="home-button">Home</h2>
          <h2 className="about-button">About</h2>
        </div>
        <About/>
      </main>
    );
  }
}
export default Nav;
