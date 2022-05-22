import Engine from './Engine.js';

export default class BrainMorse extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Transform Morse char to English char or digit.';
    this.map = {
      '.': 'e',
      _: 't',
      '..': 'i',
      '._': 'a',
      '_.': 'n',
      __: 'm',
      '...': 's',
      '._.': 'r',
      '.._': 'u',
      '_..': 'd',
      '.__': 'w',
      '_._': 'k',
      '__.': 'g',
      ___: 'o',
      '....': 'h',
      '..._': 'v',
      '.._.': 'f',
      '._..': 'l',
      '_...': 'b',
      '.__.': 'p',
      '_.._': 'x',
      '_._.': 'c',
      '__..': 'z',
      '.___': 'j',
      '_.__': 'y',
      '__._': 'q',
      _____: 0,
      '.____': 1,
      '..___': 2,
      '...__': 3,
      '...._': 4,
      '.....': 5,
      '_....': 6,
      '__...': 7,
      '___..': 8,
      '____.': 9,
    };
  }

  getRandomArgs() {
    const chars = Object.keys(this.map);
    const char = chars[this.getRandomNum(0, chars.length - 1)];

    return [char];
  }

  getCorrectAnswer([char]) {
    return this.map[char];
  }
}
