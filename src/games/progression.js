import { runGameEngin } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (firstMember, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstMember + step * i);
  }
  return progression;
};


const generateRoundData = () => {
  const firstMember = generateRandomNumber(0, 50);
  const step = generateRandomNumber(0, 20);
  const progressionLength = 10;
  const progression = generateProgression(firstMember, step, progressionLength);
  const randomIndex = generateRandomNumber(0, 9);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const runProgressionGame = () => runGameEngin(gameDescription, generateRoundData);

export default runProgressionGame;
