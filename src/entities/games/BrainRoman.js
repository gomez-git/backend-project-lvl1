import Engine from './Engine.js';

export default class BrainRoman extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Convert arabic number to roman.';
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

  static toRoman(num) {
    let sum = 0;

    return Object.entries(BrainRoman.map)
      .reduceRight((acc, [roman, arabic]) => {
        let result = '';
        while (num - sum >= arabic) {
          sum += arabic;
          result = `${result}${roman}`;
        }
        return `${acc}${result}`;
      }, '');
  }

  getRandomArgs() {
    return [this.getRandomNum()];
  }

  getCorrectAnswer([num]) {
    return this.constructor.toRoman(num);
  }
}
