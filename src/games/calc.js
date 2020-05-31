import { gameEngin } from '../index.js';
import { getRandomNumber } from '../utils.js';

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
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const firstOperand = getRandomNumber(0, 30);
  const secondOperand = getRandomNumber(0, 10);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(firstOperand, secondOperand, operator));
  return [question, correctAnswer];
};

const runCalcGame = () => gameEngin(gameDescription, generateRoundData);

export default runCalcGame;
