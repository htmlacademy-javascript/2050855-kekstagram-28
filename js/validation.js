import { sendData } from './api.js';
import { openErrorMessage, openSuccessMessage } from './message.js';
import {
  MAX_NUMBER_HASHTAGS,
  TAGS_ERROR_TEXT,
  HASHTAGS_GUIDE,
} from './constants.js';

const uploadImgElement = document.querySelector('.img-upload');
const formElement = uploadImgElement.querySelector('.img-upload__form');
const hashtagFieldElement = uploadImgElement.querySelector('.text__hashtags');
const submitButtonElement = uploadImgElement.querySelector('.img-upload__submit');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error'
});

const isHashtagValid = (tag) => HASHTAGS_GUIDE.test(tag);

const isHashtagsCountValid = (tags) => tags.length <= MAX_NUMBER_HASHTAGS;

const isHashtagsUnique = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return isHashtagsCountValid(tags) && isHashtagsUnique(tags) && tags.every(isHashtagValid);
};

pristine.addValidator(
  hashtagFieldElement,
  validateTags,
  TAGS_ERROR_TEXT
);

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Идет отправка...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

const setFormSubmit = (onSuccess, onError) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();

      sendData(
        () => {
          onSuccess();
          openSuccessMessage();
          unblockSubmitButton();
        },
        () => {
          onError();
          openErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

export { setFormSubmit, pristine, unblockSubmitButton };
