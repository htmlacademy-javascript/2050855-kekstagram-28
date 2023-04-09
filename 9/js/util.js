import { COMMENT_STEP_COUNT } from './constants.js';

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

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
  showAlert,
  Range
};
