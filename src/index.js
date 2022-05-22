import User from './entities/User.js';
import MainMenu from './entities/menu/MainMenu.js';

const performUserAction = (input, { actions, lines }) => {
  const property = lines.find((line) => line[1] === input);
  const action = actions[property];

  return action();
};

const showMenuAndChooseGame = () => {
  let menu = new MainMenu();
  let Game;

  while (Game === undefined) {
    const input = menu.askForUserAction();
    const result = performUserAction(input, menu);

    switch (input) {
      case 'c':
      case 'b':
        menu = result;
        break;
      default:
        Game = result;
    }
  }

  return Game;
};

const playGame = (Game, gameOptions) => {
  const game = new Game(gameOptions);
  const gameResult = game.run();

  return gameResult;
};

export default ({ endless, ...gameOptions }) => {
  const { maxRounds } = gameOptions;
  const user = new User();
  user.greetUser();

  do {
    const Game = showMenuAndChooseGame();
    const gameResult = playGame(Game, gameOptions);
    if (maxRounds !== Infinity) {
      user.sayByeToUser(gameResult);
    }
  } while (endless);
};
