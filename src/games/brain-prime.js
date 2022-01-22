import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getArgs = () => [getRandomNumber()];
const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => gameLogic(task, getArgs, isPrime);
