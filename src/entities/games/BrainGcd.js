import Engine from './Engine.js';

export default class BrainGcd extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Find the greatest common divisor of given numbers.';
  }

  static getGcd(num1, num2) {
    return num2 === 0
      ? num1
      : BrainGcd.getGcd(num2, num1 % num2);
  }

  getRandomArgs() {
    const num1 = this.getRandomNum();
    const num2 = this.getRandomNum();

    return [num1, num2];
  }

  getCorrectAnswer(numbers) {
    return this.constructor.getGcd(...numbers);
  }
}
