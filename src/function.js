const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default getRandomInteger;

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
