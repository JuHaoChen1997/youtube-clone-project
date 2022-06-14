import './App.css'
import React from 'react'
import About from './Components/About'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className='App'>
        <main className='main'>
          <div className='navbar'>
            <h1 className='youtube-logo'>Youtube *Logo Goes Here*</h1>
            <h2 className='home-button'>Home</h2>
            <h2 className='about-button'>About</h2>
          </div>
          <About />
        </main>
      </div>
    )
  }
}

export default App
