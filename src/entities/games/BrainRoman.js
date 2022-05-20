import Engine from './Engine.js';
import BrainArabic from './BrainArabic.js';

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

  static toRoman(arabicNum) {
    return arabicNum
      .split('')
      .map((num) => BrainRoman.map[num])
      .reduce((acc, num, i, arr) => (
        num >= (arr[i + 1] ?? 0)
          ? acc + num
          : acc - num
      ), 0);
  }

  getRandomArgs() {
    const num = this.getRandomNum();
    const arabicNum = BrainArabic.toArabic(num);

    return [arabicNum];
  }

  getCorrectAnswer([arabicNum]) {
    return this.constructor.toRoman(arabicNum);
  }
}
