import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <main className='main'>
          <div className='navbar'>
            <img
              src='./components/YTLOGO2.jpeg'
              alt='Youtube Logo'
              width='15'
              height='15'
            />

            <Link to='/'>
              <h2 className='home-button'>Home</h2>
            </Link>
            <Link to='/About'>
              <h2 className='about-button'>About</h2>
            </Link>
          </div>
        </main>
      </Router>
    );
  }
}
export default Nav;
