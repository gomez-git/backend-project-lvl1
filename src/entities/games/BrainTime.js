import Engine from './Engine.js';

export default class BrainTime extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Convert minutes to human-readable time.';
  }

  static convertMinutes(timeInMinutes) {
    const time = [Math.floor(timeInMinutes / 60), timeInMinutes % 60];

    return time
      .map((t) => (t < 10 ? `0${t}` : t))
      .join(':');
  }

  getRandomArgs() {
    return [this.getRandomNum(0, 1440)];
  }

  getCorrectAnswer([timeInMinutes]) {
    return this.constructor.convertMinutes(timeInMinutes);
  }
}
