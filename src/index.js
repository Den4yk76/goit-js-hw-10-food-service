import { func } from 'assert-plus';
import menuItemTempl from './src/templates/menu-template.hbs';

const checkbox = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.theme === Theme.DARK) {
  checkbox.checked = true;
  bodyEl.classList.add(Theme.DARK);
}

checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(e) {
  if (checkbox.checked === true) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function createMenu(e) {
  return;
}
