import { COMMENT_STEP_COUNT } from './constants.js';

const getInitialCommentStateCount = (count = 0) => {
  let countInitialCommentState = count;
  countInitialCommentState += COMMENT_STEP_COUNT;
  return countInitialCommentState;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

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

const Range = function(min = 0, max = 100, step = 1, value) {
  this._min = min;
  this._max = max;
  this._step = step;
  this.value = value || max;
};

Range.prototype.increase = function() {
  this.value = Math.min(this.value + this._step, this._max);
};

Range.prototype.decrease = function() {
  this.value = Math.max(this.value - this._step, this._min);
};

export {
  generateUniqueNumber,
  getRandomInteger,
  getRandomArrayElement,
  isEscapeKey,
  removeEventListener,
  getInitialCommentStateCount,
  Range
};
