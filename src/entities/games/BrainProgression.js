import Engine from './Engine.js';

export default class BrainProgression extends Engine {
  constructor(options) {
    super(options);
    this.task = 'What number is missing in the progression?';
    this.minStep = 6;
    this.maxStep = 9;
  }

  static findMissingNumber(progression) {
    const indexOfMissingNumber = progression.indexOf('..');
    const { length: lengthOfProgression } = progression;

    if (indexOfMissingNumber === 0 || indexOfMissingNumber === lengthOfProgression - 1) {
      const stepOfProgression = progression[2] - progression[1];

      return indexOfMissingNumber === 0
        ? progression[1] - stepOfProgression
        : progression[lengthOfProgression - 2] + stepOfProgression;
    }

    return (progression[indexOfMissingNumber - 1] + progression[indexOfMissingNumber + 1]) / 2;
  }

  getRandomArgs() {
    const firstNum = this.getRandomNum();
    const stepOfProgression = this.getRandomNum(this.minStep, this.maxStep);
    const lengthOfProgression = this.getRandomNum(this.minStep, this.maxStep);
    const indexOfMissingNumber = this.getRandomNum(0, lengthOfProgression - 1);

    return [...Array(lengthOfProgression)]
      .map((_a, i) => (
        i === indexOfMissingNumber
          ? '..'
          : firstNum + i * stepOfProgression
      ));
  }

  getCorrectAnswer(progression) {
    return this.constructor.findMissingNumber(progression);
  }
}
