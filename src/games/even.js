import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';


const instructionsForGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const question = getRandomInteger(1, 100);

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const trueAnswer = isEven(question);


const brainEven = () => gameEngin(instructionsForGame, question, trueAnswer);

export default brainEven;
