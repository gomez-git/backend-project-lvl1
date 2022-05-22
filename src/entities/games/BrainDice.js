import Engine from './Engine.js';

export default class BrainDice extends Engine {
  constructor(options) {
    super(options);
    this.task = 'A dice was rolled... Try to guess the number from 1 to 6.';
    this.mask = '*';
  }

  getRandomArgs() {
    return [this.mask];
  }

  getCorrectAnswer() {
    return this.getRandomNum(1, 6);
  }
}
