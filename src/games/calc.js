import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';

const instructionsForGame = 'What is the result of the expression?';

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


const getRoundData = () => {
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const firstOperand = getRandomInteger(0, 30);
  const secondOperand = getRandomInteger(0, 10);
  const question = `"What is the result of the expression: ${firstOperand} ${operator} ${secondOperand} ?"`;
  const trueAnswer = String(calculate(firstOperand, secondOperand, operator));
  return [question, trueAnswer];
};

const runCalcGame = () => gameEngin(instructionsForGame, getRoundData);

export default runCalcGame;
