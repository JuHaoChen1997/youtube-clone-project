import React from 'react';
import './DarkMode.css';
/**
 * Feature to toggle between light and dark modes for the Youtube webpage. Utilizes local storage
 * to store the user's selection of light or dark, with the coloring handled by a :root global variable/conditional
 * present in App.css.
 * @param {string} dark - conditional for dark mode settings.
 * @param {string} light - conditional for light mode settings (DEFAULT).
 * @param {string} toggle - represents which mode is selected or not by the user.
 * @param theme = is the active theme that the user has selected.
 */
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
