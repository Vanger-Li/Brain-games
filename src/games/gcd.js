import { runGameEngine } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const isGreatestCommonDivisor = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return isGreatestCommonDivisor(num2, num1 % num2);
};

const generateRoundData = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(isGreatestCommonDivisor(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const runGcdGame = () => runGameEngine(gameDescription, generateRoundData);

export default runGcdGame;
