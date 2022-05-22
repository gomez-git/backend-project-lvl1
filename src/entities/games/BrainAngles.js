import Engine from './Engine.js';

export default class BrainAngles extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Calculate minimal angle between two angles.';
  }

  static calculateAngle(angle1, angle2) {
    const diff = 360 - Math.abs(angle1 - angle2);

    return diff > 180 ? 360 - diff : diff;
  }

  getRandomArgs() {
    const angle1 = this.getRandomNum(0, 360);
    const angle2 = this.getRandomNum(0, 360);

    return [angle1, angle2];
  }

  getCorrectAnswer([angle1, angle2]) {
    return this.constructor.calculateAngle(angle1, angle2);
  }
}
