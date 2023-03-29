const generateUniqueNumber = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

function isEscapeKey(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
}
const isEnterKey = (evt) => evt.key === 'Enter';

export { generateUniqueNumber, getRandomInteger, getRandomArrayElement, isEscapeKey, isEnterKey };
