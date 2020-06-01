import { runGameEngine } from '../index.js';
import { generateRandomNumber } from '../utils.js';


const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (number) => {
  let counter = 2;
  if (number <= 1) {
    return false;
  }
  while (counter <= number / 2) {
    if (number % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};


const generateRoundData = () => {
  const number = generateRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = (isPrime(number) ? 'yes' : 'no');
  return [question, correctAnswer];
};


const runPrimeGame = () => runGameEngine(gameDescription, generateRoundData);

export default runPrimeGame;
