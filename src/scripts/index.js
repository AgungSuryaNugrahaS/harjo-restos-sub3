import 'regenerator-runtime';
import './components/footer';
import './components/jumbotron';
import './components/navbarComponent';
import '../styles/responsive.css';
import '../styles/main.css';
import swRegister from './utils/swRegister';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const apps = new App({
  navbar: document.querySelector('.navbar'),
  drawer: document.querySelector('#navbar-drawer'),
  button: document.querySelector('#menu'),
  jumbotron: document.querySelector('.jumbotron'),
  content: document.querySelector('main'),
});

window.addEventListener('scroll', () => {
  apps._navbarEvt();
});

window.addEventListener('hashchange', () => {
  apps.render();
});

window.addEventListener('load', () => {
  apps.render();
  swRegister();
});
