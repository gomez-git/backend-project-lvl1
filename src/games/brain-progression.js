import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';
const getArgs = () => {
  const numbers = [];
  const lengthOfProgression = getRandomNumber(6, 10);
  const indexOfMissingNumber = getRandomNumber(0, lengthOfProgression - 1);
  const stepOfProgression = getRandomNumber(2, 10);
  const firstNumber = getRandomNumber();

  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === indexOfMissingNumber) {
      numbers.push('..');
    } else {
      numbers.push(firstNumber + i * stepOfProgression);
    }
  }

  return numbers;
};
const getMissingNumber = (coll) => {
  const indexOfMissingNumber = coll.indexOf('..');
  let missingNumber;

  if (indexOfMissingNumber !== 0 && indexOfMissingNumber !== coll.length - 1) {
    missingNumber = (coll[indexOfMissingNumber - 1] + coll[indexOfMissingNumber + 1]) / 2;
  } else {
    const stepOfProgression = coll[2] - coll[1];
    missingNumber = indexOfMissingNumber === 0
      ? coll[1] - stepOfProgression
      : coll[coll.length - 2] + stepOfProgression;
  }

  return missingNumber;
};

export default () => gameLogic(task, getArgs, getMissingNumber);
