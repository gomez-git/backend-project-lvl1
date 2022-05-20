import readlineSync from 'readline-sync';

export default class Menu {
  buildLimit() {
    return this.lines.map((line) => line[1]);
  }

  askForUserAction() {
    console.log(this.lines.join('\n'));

    return readlineSync
      .keyIn(this.query, { limit: this.limit })
      .toLowerCase();
  }
}
