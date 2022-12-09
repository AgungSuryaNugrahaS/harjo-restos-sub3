import 'regenerator-runtime'; /* for async await transpile */
import './components/navbarComponent';
import './components/jumbotron';
import './components/footer';
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/swRegister';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  header: document.querySelector('.navbar'),
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navbarDrawer'),
  jumbotron: document.querySelector('.jumbotron'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', () => {
  app._navbarEvt();
});
