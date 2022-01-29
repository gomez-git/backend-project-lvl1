import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getArgs = () => [getRandomNumber()];
const getCorrectAnswer = ([num]) => (isPrime(num) ? 'yes' : 'no');

export default () => gameLogic(task, getArgs, getCorrectAnswer);
