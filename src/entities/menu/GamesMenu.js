import Menu from './Menu.js';
import MainMenu from './MainMenu.js'; // eslint-disable-line import/no-cycle
import Games from '../games/Games.js';

export default class GamesMenu extends Menu {
  constructor() {
    super();
    this.query = 'Which game do you want to play? ';
    this.actions = { ...Games.brainGames, '[b] Back': () => new MainMenu() };
    this.lines = Object.keys(this.actions);
    this.limit = this.buildLimit();
  }
}
