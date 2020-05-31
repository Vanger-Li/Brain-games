import { gameEngin } from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';


const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return getGreatestCommonDivisor(num2, num1 % num2);
};


const generateRoundData = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const runGcdGame = () => gameEngin(gameDescription, generateRoundData);

export default runGcdGame;
