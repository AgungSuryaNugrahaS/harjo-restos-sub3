import routes from '../routes/routes';
import navbarEvt from '../utils/navbarEvt';
import UrlParser from '../routes/URLParser';
import DrawerInit from '../utils/drawerInit';

class App {
  constructor({
    navbar, button,
    content, drawer,
    jumbotron,
  }) {
    this._content = content;
    this._navbar = navbar;
    this._button = button;
    this._jumbotron = jumbotron;
    this._drawer = drawer;

    this._initialApp();
  }

  _initialApp() {
    DrawerInit.init({
      drawer: this._drawer,
      content: this._content,
      jumbotron: this._jumbotron,
      button: this._button,
    });
  }

  _navbarEvt() {
    navbarEvt({
      jumbotron: this._jumbotron,
      navbar: this._navbar,
    });
  }

  async render() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const apps = routes[url];
    this._content.innerHTML = await apps.render();
    await apps.afterRender();

    document.querySelector('.skip-content').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
