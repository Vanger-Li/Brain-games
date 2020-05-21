import readlineSync from 'readline-sync';

let name;

export const greeting = () => {
  console.log('Welcome to the Brain games');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const getUserName = () => name;
