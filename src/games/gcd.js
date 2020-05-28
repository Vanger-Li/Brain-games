import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';

const instructionsForGame = 'Find the greatest common divisor of given numbers.';


const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return getGreatestCommonDivisor(num2, num1 % num2);
};


const getRoundData = () => {
  const firstInteger = getRandomInteger(1, 50);
  const secondInteger = getRandomInteger(1, 50);
  const question = `"What is the greatest common divisor of ${firstInteger} and ${secondInteger}?"`;
  const correctAnswer = String(getGreatestCommonDivisor(firstInteger, secondInteger));
  return [question, correctAnswer];
};

const runGcdGame = () => gameEngin(instructionsForGame, getRoundData);

export default runGcdGame;
