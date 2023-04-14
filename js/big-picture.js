import { isEscapeKey, removeEventListener } from './util.js';
import { renderComments, clearComments } from './comments.js';
import {
  uploadMoreComment,
  clearCommentMarkupCounterState,
  onSocialCommentsClick,
  addEventListenerSocialCommentsLoader
} from './more-comments.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const cancelBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentLoaderButton = bigPicture.querySelector('.social__comments-loader');

const closeModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeModalByEscape = (evt, typeOfEvent, handleEventFunction) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
    removeEventListener(document, typeOfEvent, handleEventFunction);
  }
};

const onBigPictureKeydown = (evt) => {
  switch (evt.type) {
    case 'keydown':
      closeModalByEscape(evt, 'keydown', onBigPictureKeydown);
      removeEventListener(socialCommentLoaderButton, 'click', onSocialCommentsClick);
      clearCommentMarkupCounterState();
      break;
    default:
      closeModal();
      break;
  }
};

const onBigPictureClick = (evt) => {
  switch (evt.type) {
    case 'click':
      closeModal();
      removeEventListener(cancelBigPictureButton, 'click', onBigPictureClick);
      removeEventListener(document, 'keydown', onBigPictureKeydown);
      removeEventListener(socialCommentLoaderButton, 'click', onSocialCommentsClick);
      clearCommentMarkupCounterState();
      break;
    default:
      closeModal();
      break;
  }
};


const renderBigPicture = ((url, likes, comments, description) => {
  bigPicture.classList.remove('hidden');
  socialCommentLoaderButton.classList.remove('hidden');

  cancelBigPictureButton.addEventListener('click', onBigPictureClick);
  document.addEventListener('keydown', onBigPictureKeydown);

  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  body.classList.add('modal-open');

  clearComments();
  renderComments(comments);
  uploadMoreComment();
  addEventListenerSocialCommentsLoader();
});

export { renderBigPicture };
