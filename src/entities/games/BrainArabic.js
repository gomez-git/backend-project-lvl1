import Engine from './Engine.js';
import BrainRoman from './BrainRoman.js';

export default class BrainArabic extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Convert roman number to arabic.';
  }

  static toArabic(romanNum) {
    return romanNum
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
    const romanNum = BrainRoman.toRoman(num);

    return [romanNum];
  }

  getCorrectAnswer([romanNum]) {
    return this.constructor.toArabic(romanNum);
  }
}
