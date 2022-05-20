import Engine from './Engine.js';

export default class BrainAngles extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Calculate minimal angle between two angles.';
    this.min = 0;
    this.max = 360;
  }

  static calculateAngle(angle1, angle2) {
    const diff = 360 - Math.abs(angle1 - angle2);

    return diff > 180 ? 360 - diff : diff;
  }

  getRandomArgs() {
    const angle1 = this.getRandomNum();
    const angle2 = this.getRandomNum();

    return [angle1, angle2];
  }

  getCorrectAnswer([angle1, angle2]) {
    return this.constructor.calculateAngle(angle1, angle2);
  }
}
