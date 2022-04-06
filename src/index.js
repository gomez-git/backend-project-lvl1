import { getUserName, getAnswer } from './cli.js';

const say = console.log;

export const greetUser = () => {
  say('Welcome to the Brain Games!');
  const userName = getUserName();
  say(`Hello, ${userName}!`);

  return userName;
};

const engine = (getArgs, getCorrectAnswer) => {
  const maxGames = 3;
  let gamesCount = 0;
  let gameResult;

  do {
    const args = getArgs();
    say(`Question: ${args.join(' ')}`);

    const correctAnswer = getCorrectAnswer(args);
    const userAnswer = getAnswer();
    gameResult = userAnswer === String(correctAnswer);

    if (gameResult) {
      say('Correct!');
      gamesCount += 1;
    } else {
      say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  } while (gameResult && gamesCount < maxGames);

  return gameResult;
};

const sayByeToUser = (userName, gameResult) => {
  if (gameResult) {
    say(`Congratulations, ${userName}!`);
  } else {
    say(`Let's try again, ${userName}!`);
  }
};

export default (task, getArgs, getCorrectAnswer) => {
  const userName = greetUser();
  say(task);
  const gameResult = engine(getArgs, getCorrectAnswer);
  sayByeToUser(userName, gameResult);
};
