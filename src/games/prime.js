import { gameEngin } from '../index.js';
import { getRandomNumber } from '../utils.js';


const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (number) => {
  let counter = 2;
  while (counter <= number) {
    if (number % counter === 0 && number !== counter) {
      return false;
    }
    counter += 1;
  }
  return true;
};


const generateRoundData = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = (isPrime(number) ? 'yes' : 'no');
  return [question, correctAnswer];
};


const runPrimeGame = () => gameEngin(gameDescription, generateRoundData);

export default runPrimeGame;
