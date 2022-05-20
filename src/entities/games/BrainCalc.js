import Engine from './Engine.js';

export default class BrainCalc extends Engine {
  constructor(options) {
    super(options);
    this.task = 'What is the result of expression?';
    this.operators = ['+', '-', '*', '%'];
  }

  static calculateNumbers(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '%':
        return num1 % num2;
      default:
        throw new Error(`Unknown operator: '${operator}'!`);
    }
  }

  getRandomArgs() {
    const num1 = this.getRandomNum();
    const num2 = this.getRandomNum();
    const index = this.getRandomNum(0, this.operators.length - 1);
    const operator = this.operators[index];

    return [num1, operator, num2];
  }

  getCorrectAnswer(args) {
    return this.constructor.calculateNumbers(...args);
  }
}
