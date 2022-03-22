import { getUserName, getAnswer } from './cli.js';

const say = console.log;

export default (task, getArgs, getCorrectAnswer) => {
  say('Welcome to the Brain Games!');
  const userName = getUserName();
  say(`Hello, ${userName}!`);
  say(task);

  let gamesCount = 1;
  let gameResult;

  do {
    const args = getArgs();
    say(`Question: ${args.join(' ')}`);

    const correctAnswer = getCorrectAnswer(args);
    const userAnswer = getAnswer();
    gameResult = `${userAnswer}` === `${correctAnswer}`;
    gamesCount += 1;

    if (gameResult) {
      say('Correct!');
    } else {
      say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  } while (gameResult && gamesCount <= 3);

  if (gameResult) {
    say(`Congratulations, ${userName}!`);
  } else {
    say(`Let's try again, ${userName}!`);
  }
};
