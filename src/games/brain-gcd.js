import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';
const getArgs = () => [getRandomNumber(), getRandomNumber()];
const getGcd = ([num1, num2]) => {
  const lowestNumber = Math.min(num1, num2);
  let greastestDivisor;
  for (let i = 1; i <= lowestNumber; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      greastestDivisor = i;
    }
  }

  return greastestDivisor;
};

export default () => gameLogic(task, getArgs, getGcd);
