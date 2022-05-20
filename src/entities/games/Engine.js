import readlineSync from 'readline-sync';
import Random from '../Random.js';

export default class Engine {
  constructor({ maxRounds, numbers: [min, max] }) {
    this.maxRounds = maxRounds;
    this.min = min;
    this.max = max;
  }

  getRandomNum(min = this.min, max = this.max) {
    return Random.getRandomNum(min, max);
  }

  run() {
    console.log(this.task);
    let gameRound = 1;
    let gameResult;

    do {
      const args = this.getRandomArgs();
      console.log(`Question: ${args.join(' ')}`);

      const correctAnswer = this.getCorrectAnswer(args);
      const userAnswer = readlineSync.question('Your answer: ');
      gameResult = String(correctAnswer) === userAnswer;

      if (gameResult) {
        console.log('Correct!');
        gameRound += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      }
    } while (gameResult && gameRound <= this.maxRounds);

    if (this.maxRounds === Infinity) {
      console.log(`Your score: ${gameRound - 1}!`);
    }

    return gameResult;
  }
}
