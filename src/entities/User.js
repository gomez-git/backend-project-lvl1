import readlineSync from 'readline-sync';

export default class User {
  greetUser() {
    console.log('Welcome to the brain games!');
    this.userName = readlineSync.question('May I have your name: ');
    console.log(`Hello ${this.userName}!`);
  }

  sayByeToUser(gameResult) {
    if (gameResult) {
      console.log(`Congratulations ${this.userName}!`);
    } else {
      console.log(`Let's try again ${this.userName}!`);
    }
  }
}
