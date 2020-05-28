import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';

const instructionsForGame = 'What number is missing in the progression?';

const getProgression = () => {
  const firstMember = getRandomInteger(0, 50);
  const stepOfProgression = getRandomInteger(0, 20);
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstMember + stepOfProgression * i);
  }
  return progression;
};


const getRoundData = () => {
  const progression = getProgression();
  const randomIndex = getRandomInteger(0, 9);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const description = 'What number is missing in';
  const question = `"${description}: ${progression}?"`;
  return [question, correctAnswer];
};

const runProgressionGame = () => gameEngin(instructionsForGame, getRoundData);

export default runProgressionGame;
