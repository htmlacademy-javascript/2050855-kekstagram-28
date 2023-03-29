import { isEscapeKey } from './util.js';

const modalOverlay = document.querySelector('.big-picture');
const closeButton = document.querySelector('#upload-cancel');
const commentLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

function escCloseKeyHandler(evt) {
  if (isEscapeKey (evt)) {
    evt.preventDefault();

    photoModalCloseClickHandler();
  }
}

function photoModalOpen() {
  modalOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  closeButton.addEventListener('click', photoModalCloseClickHandler);
  document.addEventListener('keydown', escCloseKeyHandler);
}

function photoModalCloseClickHandler() {
  modalOverlay.classList.add('hidden');
  commentLoader.classList.remove('hidden');
  body.classList.remove('modal-open');

  closeButton.removeEventListener('click', photoModalCloseClickHandler);
  document.removeEventListener('keydown', escCloseKeyHandler);
}
export { photoModalOpen, photoModalCloseClickHandler };
