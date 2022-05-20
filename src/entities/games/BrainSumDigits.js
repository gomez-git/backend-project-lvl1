import Engine from './Engine.js';

export default class BrainSumDigits extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Sum digits while number has more than 1 digit.';
  }

  static sumDigits(num) {
    let result = num;

    while (result > 9) {
      result = String(result)
        .split('')
        .reduce((acc, n) => acc + Number(n), 0);
    }

    return result;
  }

  getRandomArgs() {
    return [this.getRandomNum()];
  }

  getCorrectAnswer([num]) {
    return this.constructor.sumDigits(num);
  }
}
