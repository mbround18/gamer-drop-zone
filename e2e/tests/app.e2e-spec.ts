import {AppPage} from '../lib/app.po';
import {by} from 'protractor';

describe('ark-boop-ninja App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()).toEqual('Welcome to Gamer Drop Zone!');
  });

  it('should contain app-header', () => {
    expect(page.getAppHeader().isPresent()).toBeTruthy();
  });

  it('should contain app-info', () => {
    expect(page.getAppInfo().isPresent()).toBeTruthy();
  });

  it('should contain app-servers', () => {
    expect(page.getAppServers().isPresent()).toBeTruthy();
  });

  it('main contains app-header, app-info, app-servers', () => {
    expect(page.getMainDiv().element(by.css('app-header')).isPresent()).toBeTruthy();
    expect(page.getMainDiv().element(by.css('app-info')).isPresent()).toBeTruthy();
    expect(page.getMainDiv().element(by.css('app-servers')).isPresent()).toBe(true);
  });
  // it('', () => {
  //
  // });

});
