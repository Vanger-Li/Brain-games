import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';


const instructionsForGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getGameData = () => {
  const integer = getRandomInteger(1, 100);
  const question = `"Is the number ${integer} even?"`;
  const trueAnswer = isEven(integer);
  return [question, trueAnswer];
};


const runEvenGame = () => gameEngin(instructionsForGame, getGameData);

export default runEvenGame;
