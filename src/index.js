import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain games');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

const gameEngin = (gameDescription, generateRoundData) => {
  console.log('Welcome to the Brain games');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(gameDescription);

  const roundsCount = 3;

  for (let round = 1; round <= roundsCount; round += 1) {
    const [question, correctAnswer] = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's train again ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}! You're won!`);
};

export { greeting, gameEngin };
