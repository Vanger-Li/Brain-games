import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';


const instructionsForGame = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (number) => {
  let counter = 2;
  while (counter <= number) {
    if (number % counter === 0 && number !== counter) {
      return 'no';
    }
    counter += 1;
  }
  return 'yes';
};


const getGameData = () => {
  const integer = getRandomInteger(1, 100);
  const question = `"Is the number ${integer} prime?"`;
  const trueAnswer = isPrime(integer);
  return [question, trueAnswer];
};


const runPrimeGame = () => gameEngin(instructionsForGame, getGameData);

export default runPrimeGame;
