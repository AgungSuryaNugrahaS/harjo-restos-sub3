import routes from '../routes/routes';
import UrlParser from '../routes/URLParser';
import DrawerInit from '../utils/drawerInit';
import navbarEvt from '../utils/navbarEvt';

class App {
  constructor({
    header, button,
    drawer, jumbotron,
    content,
  }) {
    this._header = header;
    this._button = button;
    this._drawer = drawer;
    this._jumbotron = jumbotron;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInit.init({
      button: this._button,
      drawer: this._drawer,
      jumbotron: this._jumbotron,
      content: this._content,
    });
  }

  _navbarEvt() {
    navbarEvt({
      header: this._header,
      jumbotron: this._jumbotron,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
