import {browser, by, element} from 'protractor';


export class AppPage {

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAppHeader() {
    return element(by.css('app-header'));
  }

  getAppInfo() {
    return element(by.css('app-info'));
  }

  getAppServers() {
    return element(by.css('app-servers'));
  }

  getMainDiv() {
    return element(by.id('main'));
  }
}
