import {browser} from 'protractor';

export class Helper {

  navigateTo(path) {
    return browser.get(path);
  }

  navigateToBase() {
    return this.navigateTo('/');
    // return browser.get('/');
  }
}

