import { openFormAndAddEscapeListener } from './user-form.js';
import {
  isEscapeKey,
  removeEventListener,
  showAlert
} from './util.js';

const errorMessageElement = document.querySelector('.error');
const successMessageElement = document.querySelector('.success');
const errorMessageButtonElement = document.querySelector('.error__button');
const successMessageButtonElement = document.querySelector('.success__button');

const closeMessages = () => {
  errorMessageElement.classList.add('hidden');
  successMessageElement.classList.add('hidden');
};

const onMessageErrorClose = () => {
  errorMessageElement.classList.add('hidden');
  openFormAndAddEscapeListener();
};

const onMessageSuccessClose = () => {
  successMessageElement.classList.add('hidden');
};

const onMessageKeydown = (evt) => {

  switch (evt.type) {
    case 'keydown':
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        if (errorMessageElement.classList.contains('hidden')) {
          onMessageSuccessClose();
          removeEventListener(successMessageButtonElement, 'click', onMessageSuccessClose);
          removeEventListener(document, 'keydown', onMessageKeydown);
          return;
        }
        if (successMessageElement.classList.contains('hidden')) {
          onMessageErrorClose();
          removeEventListener(errorMessageButtonElement, 'click', onMessageErrorClose);
          removeEventListener(document, 'keydown', onMessageKeydown);
        }
      }
      break;
    default:
      closeMessages();
      removeEventListener(successMessageButtonElement, 'click', onMessageSuccessClose);
      removeEventListener(errorMessageButtonElement, 'click', onMessageErrorClose);
      removeEventListener(document, 'keydown', onMessageKeydown);
      break;
  }
};


const onMessageClick = (evt) => {
  const parentNodeElement = evt.target.parentNode;

  switch (evt.type) {
    case 'click':
      if (errorMessageElement.classList.contains('hidden')) {
        if (parentNodeElement.classList.contains('success__inner') || parentNodeElement.classList.contains('success')) {
          return;
        }
        onMessageSuccessClose();
        removeEventListener(successMessageButtonElement, 'click', onMessageSuccessClose);
        removeEventListener(document, 'keydown', onMessageKeydown);
        removeEventListener(document, 'click', onMessageClick);
        return;
      }
      if (successMessageElement.classList.contains('hidden')) {
        if (parentNodeElement.classList.contains('error__inner') || parentNodeElement.classList.contains('error')) {
          return;
        }
        onMessageErrorClose();
        removeEventListener(errorMessageButtonElement, 'click', onMessageErrorClose);
        removeEventListener(document, 'keydown', onMessageKeydown);
        removeEventListener(document, 'click', onMessageClick);
      }
      break;
    default:
      closeMessages();
      removeEventListener(successMessageButtonElement, 'click', onMessageSuccessClose);
      removeEventListener(errorMessageButtonElement, 'click', onMessageErrorClose);
      removeEventListener(document, 'click', onMessageClick);
      break;
  }
};


const openErrorMessage = () => {
  errorMessageElement.classList.remove('hidden');
  errorMessageButtonElement.addEventListener('click', onMessageErrorClose);
  document.addEventListener('keydown', onMessageKeydown);
  document.addEventListener('click', onMessageClick);
};

const openSuccessMessage = () => {
  successMessageElement.classList.remove('hidden');
  successMessageButtonElement.addEventListener('click', onMessageSuccessClose);
  document.addEventListener('keydown', onMessageKeydown);
  document.addEventListener('click', onMessageClick);
};

const openLoadingMessage = () => {
  showAlert('Идет загрузка...');
  document.querySelector('.loading').classList.remove('hidden');
};

export {
  openErrorMessage,
  openSuccessMessage,
  openLoadingMessage
};
