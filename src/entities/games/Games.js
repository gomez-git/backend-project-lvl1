import Random from '../Random.js';
import BrainAngles from './BrainAngles.js';
import BrainArabic from './BrainArabic.js';
import BrainBalance from './BrainBalance.js';
import BrainCalc from './BrainCalc.js';
import BrainCalcPolish from './BrainCalcPolish.js';
import BrainDice from './BrainDice.js';
import BrainGcd from './BrainGcd.js';
import BrainMorse from './BrainMorse.js';
import BrainNRZI from './BrainNRZI.js';
import BrainPrime from './BrainPrime.js';
import BrainProgression from './BrainProgression.js';
import BrainRoman from './BrainRoman.js';
import BrainSumDigits from './BrainSumDigits.js';
import BrainTicket from './BrainTicket.js';
import BrainTime from './BrainTime.js';

export default class Games {
  static brainGames = {
    '[j] Brain Angles': () => BrainAngles,
    '[k] Brain Arabic': () => BrainArabic,
    '[l] Brain Balance': () => BrainBalance,
    '[;] Brain Calculator': () => BrainCalc,
    '[f] Brain Calculator Polish': () => BrainCalcPolish,
    '[d] Brain Dice': () => BrainDice,
    '[s] Brain Greatest Common Divisor': () => BrainGcd,
    '[a] Brain Morse': () => BrainMorse,
    '[i] Brain NRZI': () => BrainNRZI,
    '[e] Brain Prime': () => BrainPrime,
    '[r] Brain Progression': () => BrainProgression,
    '[o] Brain Roman': () => BrainRoman,
    '[m] Brain Sum Digits': () => BrainSumDigits,
    '[g] Brain Ticket': () => BrainTicket,
    '[h] Brain Time': () => BrainTime,
  };

  static getRandomGame() {
    const games = Object.keys(Games.brainGames);
    const index = Random.getRandomNum(0, games.length - 1);
    const gameName = games[index];

    return Games.brainGames[gameName]();
  }
}
