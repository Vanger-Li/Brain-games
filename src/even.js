import { isEven, getRandomInteger } from './function';
import { instructionsForGame, getQuestion, getAnswerFromUser, userName } from './cli';
import greeting from './cli';

const brainEven = () => {
  greeting();
  instructionsForGame();
  const roundsCount = 3;
  for (let round = 0; round <= roundsCount; round += 1) {
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
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
