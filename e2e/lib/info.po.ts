import {browser, by, element} from 'protractor';

export class InfoCard {

  getWelcomeTitle() {
    return element(by.id('welcome-title'));
  }

  getWelcomeMessage() {
    return element(by.id('welcome-message'));
  }

  getDiscordLink() {
    return element(by.id('discord-link'));
  }

  getDiscordLogo() {
    return element(by.id('discord-logo'));
  }

  getDiscordLogoText() {
    return element(by.id('discord-logo-text'));
  }

}

