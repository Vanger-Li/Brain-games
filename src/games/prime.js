import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';


const instructionsForGame = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {

} 


const getGameData = () => {
  const integer = getRandomInteger(1, 100);
  const question = `"Is the number ${integer} even?"`;
  const trueAnswer = isPrime(integer);
  return [question, trueAnswer];
};


const brainPrime = () => gameEngin(instructionsForGame, getGameData);

export default brainPrime;
