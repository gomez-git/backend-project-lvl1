import Engine from './Engine.js';
import BrainCalc from './BrainCalc.js';

export default class BrainCalcPolish extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Calculate expression in polish notation.';
    this.operators = ['-', '+', '*', '%'];
    this.sequences = [
      'ononononn',
      'oonnononn',
      'onoonnonn',
      'ooonnnonn',
      'ooonnonnn',
      'oonononnn',
      'onoononnn',
      'ononoonnn',
      'oonnoonnn',
      'onooonnnn',
      'oonoonnnn',
      'ooononnnn',
      'oooonnnnn',
    ];
  }

  static calcInPolishNotation(expression) {
    return expression
      .reduceRight((acc, item) => (
        /^\W$/.test(item)
          ? [
            ...acc.slice(0, -2),
            BrainCalc.calculateNumbers(acc.pop(), item, acc.pop()),
          ]
          : [...acc, item]
      ), [])[0];
  }

  getRandomArgs() {
    const nums = [...Array(5)].map(() => this.getRandomNum(1, 9));
    const operators = [...Array(4)]
      .map(() => this.getRandomNum(0, this.operators.length - 1))
      .map((index) => this.operators[index]);

    const index = this.getRandomNum(0, this.sequences.length - 1);
    const sequence = this.sequences[index]
      .split('')
      .map((char) => (char === 'n' ? nums.pop() : operators.pop()));

    const result = this.constructor.calcInPolishNotation(sequence);

    return Number.isNaN(result) ? this.getRandomArgs() : sequence;
  }

  getCorrectAnswer(expression) {
    return this.constructor.calcInPolishNotation(expression);
  }
}
