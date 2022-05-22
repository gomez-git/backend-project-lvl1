import Engine from './Engine.js';

export default class BrainArabic extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Convert roman number to arabic.';
  }

  static map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  static toArabic(num) {
    let sum = 0;

    return Object.entries(BrainArabic.map)
      .reduceRight((acc, [arabic, roman]) => {
        let result = '';
        while (num - sum >= roman) {
          sum += roman;
          result = `${result}${arabic}`;
        }
        return `${acc}${result}`;
      }, '');
  }

  getRandomArgs() {
    return [this.getRandomNum()];
  }

  getCorrectAnswer([num]) {
    return this.constructor.toArabic(num);
  }
}
