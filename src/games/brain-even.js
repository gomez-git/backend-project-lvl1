import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getArgs = () => [getRandomNumber()];
const isEven = ([num]) => (num % 2 === 0 ? 'yes' : 'no');

export default () => gameLogic(task, getArgs, isEven);
