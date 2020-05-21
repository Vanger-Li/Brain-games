import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';

const instructionsForGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return false;
  }
};


const getGameData = () => {
  const operator = operators[getRandomInteger(0, 2)];
  const firstOperand = getRandomInteger(0, 30);
  const secondOperand = getRandomInteger(0, 10);
  const question = `"What is the result of the expression: ${firstOperand} ${operator} ${secondOperand} ?"`;
  const trueAnswer = String(calculate(firstOperand, secondOperand, operator));
  return [question, trueAnswer];
};

const brainCalc = () => gameEngin(instructionsForGame, getGameData);

export default brainCalc;
