import { EFFECTS } from './constants.js';

const previewElement = document.querySelector('.img-upload__preview img');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const pictureEffectsElement = document.querySelector('.img-upload__effects');

const defaultEffect = EFFECTS[0];
let currentEffect = defaultEffect;

const isDefault = () => currentEffect === defaultEffect;

const onShowSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const onCloseSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });

  if (isDefault()) {
    onCloseSlider();
  } else {
    onShowSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  previewElement.className = `effects__preview--${currentEffect.name}`;
  updateSlider();
};

pictureEffectsElement.addEventListener('change', (evt) => {
  onEffectsChange(evt);
});

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  previewElement.style.filter = isDefault()
    ? defaultEffect.style
    : `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  effectValueElement.value = sliderValue;
};

noUiSlider.create(sliderElement, {
  range: {
    min: defaultEffect.min,
    max: defaultEffect.max,
  },
  start: defaultEffect.max,
  step: defaultEffect.step,
  connect: 'lower',
});
onCloseSlider();

sliderElement.noUiSlider.on('update', () => {
  onSliderUpdate();
});

const resetEffects = () => {
  currentEffect = defaultEffect;
  updateSlider();
};

export { resetEffects };
