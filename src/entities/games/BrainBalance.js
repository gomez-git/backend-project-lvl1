import Engine from './Engine.js';

export default class BrainBalance extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Balance the number (ex 958046 -> 555566).';
  }

  static getBalancedNumber(str) {
    const { length: digits } = str;
    const sum = str
      .split('')
      .reduce((acc, n) => acc + Number(n), 0);
    const minNum = Math.floor(sum / digits);
    const upNums = sum % digits;

    return [...Array(digits)]
      .reduce((acc, _a, i) => (
        i >= digits - upNums
          ? `${acc}${minNum + 1}`
          : `${acc}${minNum}`
      ), '');
  }

  getRandomArgs() {
    const num = this.getRandomNum();
    const str = num < 100 ? `0${num}` : String(num);

    return [str];
  }

  getCorrectAnswer([str]) {
    return this.constructor.getBalancedNumber(str);
  }
}
