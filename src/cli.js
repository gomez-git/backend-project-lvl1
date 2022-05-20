import { Command, InvalidArgumentError } from 'commander';
import brainGames from './index.js';

const defaultEndless = true;
const defaultMaxRounds = 3;
const defaultNumbers = [1, 100];

const parseNumber = (value) => {
  const number = Number(value);
  if (Number.isNaN(number) || number < 1) {
    throw new InvalidArgumentError();
  }
  return number;
};

const parseNumbers = (currentValue, previousValue) => {
  const number = parseNumber(currentValue);

  return previousValue === defaultNumbers
    ? [number]
    : [...previousValue, number];
};

export default () => {
  const program = new Command();

  program
    .description('A collection of 15 brain games')
    .version('2.0.0', '-v, --version', 'output the version number')
    .option('-e, --endless', 'play games endless', defaultEndless)
    .option('-o, --no-endless', 'play one game')
    .option(
      '-r, --max-rounds <rounds>',
      'define max game rounds',
      parseNumber,
      defaultMaxRounds,
    )
    .option(
      '-n, --numbers <numbers...>',
      'define min and max numbers',
      parseNumbers,
      defaultNumbers,
    );

  program
    .action(() => {
      brainGames(program.opts());
    });

  program.parse();
};
