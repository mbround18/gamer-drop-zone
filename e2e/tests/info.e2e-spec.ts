import {browser, by} from 'protractor';
import {Helper} from '../helper';
import {InfoCard} from '../lib/info.po';

describe('ark-boop-ninja InfoCard', () => {
  let helper: Helper;
  let page: InfoCard;

  beforeEach(() => {
    helper = new Helper();
    page = new InfoCard();
    helper.navigateToBase();
  });

  // Example for starting a test do not delete/uncomment just copy/paste as needed
  // it('', () => {
  //
  // });

  it('should display welcome title', () => {
    expect(page.getWelcomeTitle().getText()).toBe('Welcome to Gamer Drop Zone!');
  });

  it('should display welcome message', () => {
    expect(page.getWelcomeTitle().getText()).toBe('Welcome to Gamer Drop Zone!');
  });

  it('discord link points to discord.boop.ninja', () => {
    expect(page.getDiscordLink().getAttribute('href')).toBe('https://discord.boop.ninja/');
  });

  it('discord logo is present', () => {
    expect(page.getDiscordLogo().isPresent).toBeTruthy();
  });

  it('discord logo with text is present', () => {
    expect(page.getDiscordLogoText().isPresent).toBeTruthy();
  });

  it('discord link has both logo and logo text', () => {
    expect(page.getDiscordLogo().element(by.xpath('..')).getAttribute('id')).toBe('discord-link');
    expect(page.getDiscordLogoText().element(by.xpath('..')).getAttribute('id')).toBe('discord-link');
  });

  // it('discord link has both logo and logo text', () => {
  //   const start_url = browser.getCurrentUrl();
  //   page.getDiscordLogo().click();
  //   browser.getAllWindowHandles().then(function (handles) {
  //     browser.switchTo().window(handles[1]);
  //   });
  //   // browser.switchTo(browser.getAllWindowHandles().last());
  //   expect(browser.getCurrentUrl() === start_url).toBeFalsy();
  //   expect(browser.getCurrentUrl()).toBe('https://discord.boop.ninja/');
  //   // expect(page.getDiscordLogo().element(by.xpath('..')).getAttribute('id')).toBe('discord-link');
  //   // expect(page.getDiscordLogoText().element(by.xpath('..')).getAttribute('id')).toBe('discord-link');
  // });


});

