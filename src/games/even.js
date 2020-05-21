import readlineSync from 'readline-sync';

let name;

const greeting = () => {
  console.log('Welcome to the Brain games');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const instructionsForGame = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getQuestion = () => getRandomInteger(1, 100);

const getAnswerFromUser = () => readlineSync.question('Your answer: ');

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');


const brainEven = () => {
  greeting();
  instructionsForGame();
  const roundsCount = 3;
  for (let round = 1; round <= roundsCount; round += 1) {
    const question = getQuestion();
    console.log(`Question: "Number ${question} is even?"`);
    const userAnswer = getAnswerFromUser();
    const trueAnswer = isEven(question);
    if (userAnswer !== trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's train again ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations! ${name}`);
};

export default brainEven;
