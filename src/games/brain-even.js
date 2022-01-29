import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getArgs = () => [getRandomNumber()];
const getCorrectAnswer = ([num]) => (isEven(num) ? 'yes' : 'no');

export default () => gameLogic(task, getArgs, getCorrectAnswer);
