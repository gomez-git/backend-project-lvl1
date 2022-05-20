export default class Random {
  static getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
