import readlineSync from 'readline-sync';
import { greeting, getUserName } from './cli';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const instructionsForGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getQuestion = () => getRandomInteger(1, 100);

const getAnswerFromUser = () => readlineSync.question('Your answer: ');

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');


const brainEven = () => {
  greeting();
  instructionsForGame();
  const roundsCount = 3;
  for (let round = 0; round <= roundsCount; round += 1) {
    const userName = getUserName();
    const question = getQuestion();
    const userAnswer = getAnswerFromUser();
    const trueAnswer = isEven(question);
    if (userAnswer !== trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's train again ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations!');
};

export default brainEven;
