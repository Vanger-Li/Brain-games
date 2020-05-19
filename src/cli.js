import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const instructionsForGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const getAnswerFromUser = () => readlineSync.question('Your answer: ');

export default greeting;
