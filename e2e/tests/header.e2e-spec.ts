import {browser, by} from 'protractor';
import {Helper} from '../helper';
import {Header} from '../lib/header.po';

describe('ark-boop-ninja Header', () => {
  let helper: Helper;
  let page: Header;

  beforeEach(() => {
    helper = new Helper();
    page = new Header();
    helper.navigateToBase();
  });

  // Example for starting a test do not delete/uncomment just copy/paste as needed
  // it('', () => {
  //
  // });

  it('Header contains app title', () => {
    expect(page.getHeaderTitle().getText()).toBe('Gamer Drop Zone');
  });

  it('Header title contains href of base urle', () => {
    expect(page.getHeaderTitle().getAttribute('href')).toBe(browser.baseUrl + '/');
  });

  it('Tabs builds based off array', () => {
    expect(page.getTabs().count()).toBe(2);
    expect(page.getTabs().first().getText()).toBe('Overview');
  });

  it('Changing tabs sets the selected tab active', () => {
    const first_tab = page.getTabs().first();
    const last_tab = page.getTabs().last();
    first_tab.click();
    expect(first_tab.getAttribute('class')).toBe('header-tab uk-active');
    expect(last_tab.getAttribute('class')).toBe('header-tab');
    last_tab.click();
    expect(last_tab.getAttribute('class')).toBe('header-tab uk-active');
    expect(first_tab.getAttribute('class')).toBe('header-tab');
  });


});
