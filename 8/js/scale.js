import { Range } from './util.js';

const previewElement = document.querySelector('.img-upload__preview img');
const scaleValueElement = document.querySelector('.scale__control--value');
const scaleIncreaseElement = document.querySelector('.scale__control--bigger');
const scaleDecreaseElement = document.querySelector('.scale__control--smaller');

let scale = new Range(25, 100, 25, 100);

const updateScale = () => {
  scaleValueElement.value = `${scale.value}%`;
  const scaleParam = parseFloat(scale.value / 100).toFixed(2);
  previewElement.style.transform = `scale(${scaleParam})`;
};

const resetScale = () => {
  scale = new Range(25, 100, 25, 100);
  updateScale();
};

const onScaleIncreaseClick = () => {
  scale.increase();
  updateScale();
};

const onScaleDecreaseClick = () => {
  scale.decrease();
  updateScale();
};

const clickScaler = () => {
  scaleIncreaseElement.addEventListener('click', onScaleIncreaseClick);
  scaleDecreaseElement.addEventListener('click', onScaleDecreaseClick);
  updateScale();
};

export { resetScale, clickScaler };
