import Engine from './Engine.js';

export default class BrainNRZI extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Transform NRZI code to binary.';
  }

  static transformNRZItoBinary(nrzi) {
    return nrzi
      .split('')
      .reduce((acc, e, i) => {
        if (e === '|') {
          return acc;
        }
        return nrzi[i - 1] === '|'
          ? `${acc}1`
          : `${acc}0`;
      }, '');
  }

  getRandomArgs() {
    return [...Array(10)]
      .map(() => this.getRandomNum(0, 1))
      .reduce((acc, num) => {
        const lastPosition = acc[acc.length - 1];

        return num
          ? `${acc}|${lastPosition === '_' ? '¯' : '_'}`
          : `${acc}${lastPosition === '_' ? '_' : '¯'}`;
      }, '')
      .split();
  }

  getCorrectAnswer([nrzi]) {
    return this.constructor.transformNRZItoBinary(nrzi);
  }
}
