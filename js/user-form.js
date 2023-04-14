import { isEscapeKey, removeEventListener } from './util.js';
import { pristine, unblockSubmitButton } from './validation.js';
import { resetScale, clickScaler } from './scale.js';
import { resetEffects } from './effects.js';

const formElement = document.querySelector('.img-upload__form');
const uploadFieldElement = document.querySelector('#upload-file');
const overlayFormElement = document.querySelector('.img-upload__overlay');
const hashtagFieldElement = overlayFormElement.querySelector('.text__hashtags');
const commentFieldElement = overlayFormElement.querySelector('.text__description');
const cancelButtonElement = document.querySelector('#upload-cancel');

const isFieldFocused = () =>
  document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement;

const onShowForm = () => {
  overlayFormElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onCloseForm = () => {
  overlayFormElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const hideForm = () => {
  onCloseForm();
  resetScale();
  resetEffects();
  formElement.reset();
  pristine.reset();
  unblockSubmitButton();
};

const onPopupFormClick = (evt) => {
  switch (evt.type) {
    case 'click':
      hideForm();
      removeEventListener(cancelButtonElement, 'click', onPopupFormClick);
      break;
    default:
      hideForm();
      removeEventListener(cancelButtonElement, 'click', onPopupFormClick);
      break;
  }
};

const onPopupFormKeydown = (evt) => {
  switch (evt.type) {
    case 'keydown':
      if (isEscapeKey(evt) && !isFieldFocused()) {
        evt.preventDefault();
        hideForm();
        removeEventListener(document, 'keydown', onPopupFormKeydown);
        removeEventListener(cancelButtonElement, 'click', onPopupFormClick);
      }
      break;
    default:
      hideForm();
      removeEventListener(document, 'keydown', onPopupFormKeydown);
      removeEventListener(cancelButtonElement, 'click', onPopupFormClick);
      break;
  }
};

const openFormAndAddEscapeListener = () => {
  onShowForm();
  document.addEventListener('keydown', onPopupFormKeydown);
};

const closeFormAndRemoveEscapeListener = () => {
  onCloseForm();
  removeEventListener(document, 'keydown', onPopupFormKeydown);
};

const hideFormAndRemoveAllListener = () => {
  hideForm();
  removeEventListener(document, 'keydown', onPopupFormKeydown);
  removeEventListener(cancelButtonElement, 'click', onPopupFormClick);
};

uploadFieldElement.addEventListener('change', () => {
  onShowForm();
  clickScaler();
  cancelButtonElement.addEventListener('click', onPopupFormClick);
  document.addEventListener('keydown', onPopupFormKeydown);
});

export { openFormAndAddEscapeListener, closeFormAndRemoveEscapeListener, hideFormAndRemoveAllListener };
