import Engine from './Engine.js';

export default class BrainTicket extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Answer "yes" if the ticket is happy, otherwise answer "no".';
  }

  static isHappyTicket(ticket) {
    return ticket
      .split('')
      .map((digit) => Number(digit))
      .reduce((acc, digit, i) => (
        i < 3
          ? acc + digit
          : acc - digit
      ), 0) === 0;
  }

  getRandomArgs() {
    return [...Array(6)]
      .map(() => this.getRandomNum(0, 9))
      .join('')
      .split();
  }

  getCorrectAnswer([ticket]) {
    return this.constructor.isHappyTicket(ticket) ? 'yes' : 'no';
  }
}
