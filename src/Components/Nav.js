import React from 'react';
import './Nav.css';
import DarkMode from './DarkMode';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

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
