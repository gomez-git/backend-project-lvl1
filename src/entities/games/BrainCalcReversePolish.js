import Engine from './Engine.js';

export default class BrainCalcReversePolish extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Calculate expression in reverse polish notation.';
    this.min = 1;
    this.max = 9;
    this.operators = ['+', '-', '*', '%'];
    this.sequences = [
      'nnononono',
      'nnononnoo',
      'nnonnoono',
      'nnonnnooo',
      'nnnonnooo',
      'nnnononoo',
      'nnnonoono',
      'nnnoonono',
      'nnnoonnoo',
      'nnnnooono',
      'nnnnoonoo',
      'nnnnonooo',
      'nnnnnoooo',
    ];
  }

  static calcInReversePolishNotation(expression) {
    return expression
      .reduce((acc, item) => {
        switch (item) {
          case '+':
            acc.push(acc.pop() + acc.pop());
            break;
          case '-':
            acc.push(-acc.pop() + acc.pop());
            break;
          case '*':
            acc.push(acc.pop() * acc.pop());
            break;
          case '%': {
            const num1 = acc.pop();
            const num2 = acc.pop();
            acc.push(num2 % num1);
            break;
          }
          default:
            acc.push(item);
        }
        return acc;
      }, [])[0];
  }

  getRandomArgs() {
    const nums = [...Array(5)].map(() => this.getRandomNum());
    const operators = [...Array(4)]
      .map(() => this.operators[this.getRandomNum(0, this.operators.length - 1)]);

    const randomNum = this.getRandomNum(0, this.sequences.length - 1);
    const sequence = this.sequences[randomNum]
      .split('')
      .map((char) => (char === 'n' ? nums.pop() : operators.pop()));

    const result = this.constructor.calcInReversePolishNotation(sequence);

    return Number.isNaN(result) ? this.getRandomArgs() : sequence;
  }

  getCorrectAnswer(expression) {
    return this.constructor.calcInReversePolishNotation(expression);
  }
}
