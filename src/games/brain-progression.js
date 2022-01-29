import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = () => {
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
const getMissingNumber = (progression) => {
  const indexOfMissingNumber = progression.indexOf('..');
  const lengthOfProgression = progression.length;
  let missingNumber;

  if (indexOfMissingNumber !== 0 && indexOfMissingNumber !== lengthOfProgression - 1) {
    missingNumber = (
      (progression[indexOfMissingNumber - 1] + progression[indexOfMissingNumber + 1]) / 2
    );
  } else {
    const secondNumber = progression[1];
    const thirdNumber = progression[2];
    const stepOfProgression = thirdNumber - secondNumber;
    missingNumber = indexOfMissingNumber === 0
      ? secondNumber - stepOfProgression
      : progression[lengthOfProgression - 2] + stepOfProgression;
  }

  return missingNumber;
};

const task = 'What number is missing in the progression?';
const getArgs = () => getProgression();
const getCorrectAnswer = (progression) => getMissingNumber(progression);

export default () => gameLogic(task, getArgs, getCorrectAnswer);
