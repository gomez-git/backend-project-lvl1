import Engine from './Engine.js';

export default class BrainTicket extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Answer "yes" if the ticket is happy, otherwise answer "no".';
    this.min = 0;
    this.max = 9;
  }

  static isHappyTicket(ticket) {
    return ticket
      .split('')
      .reduce((acc, d, i) => (
        i < 3
          ? acc + Number(d)
          : acc - Number(d)
      ), 0) === 0;
  }

  getRandomArgs() {
    return [...Array(6)]
      .map(() => this.getRandomNum())
      .join('')
      .split();
  }

  getCorrectAnswer([ticket]) {
    return this.constructor.isHappyTicket(ticket) ? 'yes' : 'no';
  }
}
