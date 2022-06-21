import React from 'react';
import './DarkMode.css';
const DarkMode = () => {
  const body = document.body;

  let theme;
  let toggle = 'toggled';
  const light = 'light';
  const dark = 'dark';

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }
  if (theme === light || theme === dark) {
    body.classList.add(theme);
  } else {
    body.classList.add(light);
  }
  const toggleTheme = (event) => {
    if (theme === dark) {
      body.classList.replace(dark, light);
      event.target.classList.remove(toggle);
      localStorage.setItem('theme', 'light');
      theme = light;
    } else {
      body.classList.replace(light, dark);
      event.target.classList.add(toggle);
      localStorage.setItem('theme', 'dark');
      theme = dark;
    }
  };
  return (
    <button
      className={theme === 'dark' ? toggle : ''}
      id='toggleBright'
      onClick={(event) => toggleTheme(event)}
    >
      Toggle Brightness{' '}
    </button>
  );
};
export default DarkMode;
