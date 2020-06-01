import { runGameEngine } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      break;
  }
};


const generateRoundData = () => {
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const firstOperand = generateRandomNumber(0, 30);
  const secondOperand = generateRandomNumber(0, 10);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(firstOperand, secondOperand, operator));
  return [question, correctAnswer];
};

const runCalcGame = () => runGameEngine(gameDescription, generateRoundData);

export default runCalcGame;
