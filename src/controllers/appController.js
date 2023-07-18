class AppController {
  constructor(appView) {
    this.app = appView;
    this.render = appView.createApp();
  }
}

export default AppController;
