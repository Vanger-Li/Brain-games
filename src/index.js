import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  console.log('Welcome to the Brain games');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

const gameEngin = (instructionsForGame, question, trueAnswer) => {
  console.log('Welcome to the Brain games');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(instructionsForGame);

  const roundsCount = 3;
  for (let round = 1; round <= roundsCount; round += 1) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's train again ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations! ${userName}`);
};

export { greeting, gameEngin };
