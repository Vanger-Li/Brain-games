import readlineSync from 'readline-sync';
import getRandomInteger from './function';

let name;

const greeting = () => {
  console.log('Welcome to the Brain games');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const getUserName = () => name;

export const instructionsForGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const getQuestion = () => getRandomInteger(1, 100);

export const getAnswerFromUser = () => readlineSync.question('Your answer: ');

export default greeting;
