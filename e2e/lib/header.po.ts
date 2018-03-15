import {browser, by, element} from 'protractor';

export class Header {
  getHeaderTitle() {
    return element(by.id('header-title'));
  }

  getTabs() {
    return element.all(by.className('header-tab'));
  }
}
