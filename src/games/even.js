import { gameEngin } from '../index.js';
import { getRandomNumber } from '../utils.js';


const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateRoundData = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = (isEven(number) ? 'yes' : 'no');
  const question = `${number}`;
  return [question, correctAnswer];
};


const runEvenGame = () => gameEngin(gameDescription, generateRoundData);

export default runEvenGame;
