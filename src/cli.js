import readlineSync from 'readline-sync';

let name;

const greeting = () => {
  console.log('Welcome to the Brain games');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

const getUserName = () => name;

export { greeting, getUserName };
