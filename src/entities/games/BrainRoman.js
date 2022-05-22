import Engine from './Engine.js';
import BrainArabic from './BrainArabic.js';

export default class BrainRoman extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Convert arabic number to roman.';
  }

  static toRoman(arabicNum) {
    return arabicNum
      .split('')
      .map((num) => BrainArabic.map[num])
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
