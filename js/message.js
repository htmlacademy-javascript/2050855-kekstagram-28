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

const onCloseMessageError = () => {
  errorMessageElement.classList.add('hidden');
  openFormAndAddEscapeListener();
};

const onCloseMessageSuccess = () => {
  successMessageElement.classList.add('hidden');
};

const onMessage = (evt) => {
  const parentNodeElement = evt.target.parentNode;

  switch (evt.type) {
    case 'click':
      if (errorMessageElement.classList.contains('hidden')) {
        if (parentNodeElement.classList.contains('success__inner') || parentNodeElement.classList.contains('success')) {
          return;
        }
        onCloseMessageSuccess();
        removeEventListener(successMessageButtonElement, 'click', onCloseMessageSuccess);
        removeEventListener(document, 'keydown', onMessage);
        removeEventListener(document, 'click', onMessage);
        return;
      }
      if (successMessageElement.classList.contains('hidden')) {
        if (parentNodeElement.classList.contains('error__inner') || parentNodeElement.classList.contains('error')) {
          return;
        }
        onCloseMessageError();
        removeEventListener(errorMessageButtonElement, 'click', onCloseMessageError);
        removeEventListener(document, 'keydown', onMessage);
        removeEventListener(document, 'click', onMessage);
      }
      break;
    case 'keydown':
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        if (errorMessageElement.classList.contains('hidden')) {
          onCloseMessageSuccess();
          removeEventListener(successMessageButtonElement, 'click', onCloseMessageSuccess);
          removeEventListener(document, 'keydown', onMessage);
          removeEventListener(document, 'click', onMessage);
          return;
        }
        if (successMessageElement.classList.contains('hidden')) {
          onCloseMessageError();
          removeEventListener(errorMessageButtonElement, 'click', onCloseMessageError);
          removeEventListener(document, 'keydown', onMessage);
          removeEventListener(document, 'click', onMessage);
        }
      }
      break;
    default:
      closeMessages();
      removeEventListener(successMessageButtonElement, 'click', onCloseMessageSuccess);
      removeEventListener(errorMessageButtonElement, 'click', onCloseMessageError);
      removeEventListener(document, 'keydown', onMessage);
      removeEventListener(document, 'click', onMessage);
      break;
  }
};

const openErrorMessage = () => {
  errorMessageElement.classList.remove('hidden');
  errorMessageButtonElement.addEventListener('click', onCloseMessageError);
  document.addEventListener('keydown', onMessage);
  document.addEventListener('click', onMessage);
};

const openSuccessMessage = () => {
  successMessageElement.classList.remove('hidden');
  successMessageButtonElement.addEventListener('click', onCloseMessageSuccess);
  document.addEventListener('keydown', onMessage);
  document.addEventListener('click', onMessage);
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
