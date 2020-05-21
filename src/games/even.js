import { gameEngin } from '../index.js';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const instructionsForGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const question = `Number ${getRandomInteger(1, 100)} is even?`;

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const trueAnswer = isEven(question);


const brainEven = () => gameEngin(instructionsForGame, question, trueAnswer);

export default brainEven;
