import readline from './node_modules/readline-sync';

let name;
export const greeting = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const welcome = () => {
  console.log('Welcome to the Brain games');
};