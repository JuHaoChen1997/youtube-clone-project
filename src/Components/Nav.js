import React from 'react';
import './Nav.css';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
/**
 * Setup for the Navigation bar present at the top of the website. Houses the YT logo, Brightness/Dark Mode button,
 * and active links to the YT home page and the project's about page.
 * @returns {img} - Youtube Logo that has an onclick feature to take you back to the homepage.
 * @returns {h2} Home - Active link that returns to the homepage when clicked.
 * @returns {h2} About - Active link that leads to the project description and group's about page when clicked.
 * @returns {button} Toggle Brightness - enables/disables dark background color settings when clicked.
 *
 */

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className='main'>
        <div className='navbar'>
          <Link to='/'>
            <img
              className='logo'
              src='./logos/YTLOGO.png'
              alt='Youtube Logo'
              width={150}
              height={75}
            />
          </Link>
          <Link to='/'>
            <h2 className='home-button'>Home</h2>
          </Link>
          <Link to='/About'>
            <h2 className='about-button'>About</h2>
          </Link>
          <DarkMode />
        </div>
      </main>
    );
  }
}
export default Nav;
