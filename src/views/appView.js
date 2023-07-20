import HomePage from './pages/homePage';

class AppView {
  constructor() {
    this.app = document.querySelector('#root');
  }

  createApp = () => {
    this.app.innerHTML = HomePage();
  };
}

export default AppView;
