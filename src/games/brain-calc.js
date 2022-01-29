import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const getOperator = () => operators[getRandomNumber(0, 2)];
const calcNumbers = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const task = 'What is the result of the expression?';
const getArgs = () => [getRandomNumber(), getOperator(), getRandomNumber()];
const getCorrectAnswer = (args) => calcNumbers(...args);

export default () => gameLogic(task, getArgs, getCorrectAnswer);
