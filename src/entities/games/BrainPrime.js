import Engine from './Engine.js';

export default class BrainPrime extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Answer "yes" if given number is prime, otherwise answer "no".';
  }

  static isPrime(num) {
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor += 1) {
      if (num % divisor === 0) {
        return false;
      }
    }

    return num > 1;
  }

  getRandomArgs() {
    return [this.getRandomNum()];
  }

  getCorrectAnswer([num]) {
    return this.constructor.isPrime(num) ? 'yes' : 'no';
  }
}
