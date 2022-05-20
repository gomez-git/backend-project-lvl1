import Menu from './Menu.js';
import GamesMenu from './GamesMenu.js'; // eslint-disable-line import/no-cycle
import Games from '../games/Games.js';

export default class MainMenu extends Menu {
  constructor() {
    super();
    this.query = 'Your choise: ';
    this.actions = {
      '[r] Play Random Game': () => Games.getRandomGame(),
      '[c] Choose Game': () => new GamesMenu(),
      '[q] Quit': () => process.exit(),
    };
    this.lines = Object.keys(this.actions);
    this.limit = this.buildLimit();
  }
}
