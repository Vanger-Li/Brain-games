import { gameEngin } from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (firstMember, stepOfProgression) => {
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstMember + stepOfProgression * i);
  }
  return progression;
};


const generateRoundData = () => {
  const firstMember = getRandomNumber(0, 50);
  const stepOfProgression = getRandomNumber(0, 20);
  const progression = generateProgression(firstMember, stepOfProgression);
  const randomIndex = getRandomNumber(0, 9);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = `${progression}`;
  return [question, correctAnswer];
};

const runProgressionGame = () => gameEngin(gameDescription, generateRoundData);

export default runProgressionGame;
