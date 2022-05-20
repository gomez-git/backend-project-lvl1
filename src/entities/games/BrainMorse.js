import Engine from './Engine.js';

export default class BrainMorse extends Engine {
  constructor(options) {
    super(options);
    this.task = 'Transform Morse char to English char or digit.';
  }

  static map = {
    '._': 'a',
    '_...': 'b',
    '_._.': 'c',
    '_..': 'd',
    '.': 'e',
    '.._.': 'f',
    '__.': 'g',
    '....': 'h',
    '..': 'i',
    '.___': 'j',
    '_._': 'k',
    '._..': 'l',
    __: 'm',
    '_.': 'n',
    ___: 'o',
    '.__.': 'p',
    '__._': 'q',
    '._.': 'r',
    '...': 's',
    _: 't',
    '.._': 'u',
    '..._': 'v',
    '.__': 'w',
    '_.._': 'x',
    '_.__': 'y',
    '__..': 'z',
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

  getRandomArgs() {
    const chars = Object.keys(this.constructor.map);
    const char = chars[this.getRandomNum(0, chars.length - 1)];

    return [char];
  }

  getCorrectAnswer([char]) {
    return this.constructor.map[char];
  }
}
