const COMMENT_STEP_COUNT = 5;

const getInitialCommentStateCount = (count = 0) => {
  let countInitialCommentState = count;
  countInitialCommentState += COMMENT_STEP_COUNT;
  return countInitialCommentState;
};

const removeEventListener = (removeEventListenerWhere, typeOfEvent, onEventFunction) => {
  const element = removeEventListenerWhere;
  element.removeEventListener(typeOfEvent, onEventFunction);
};

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

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  COMMENT_STEP_COUNT,
  getInitialCommentStateCount,
  removeEventListener,
  generateUniqueNumber,
  getRandomInteger,
  getRandomArrayElement,
  isEscapeKey };
