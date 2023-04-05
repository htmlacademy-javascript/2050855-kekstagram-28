import { isEscapeKey, removeEventListener } from './util.js';

const MAX_NUMBER_HASHTAGS = 5;
const HASHTAGS_GUIDE = /^#[a-zа-яё0-9]{1,19}$/i;
const TAGS_ERROR_TEXT = 'Неправильно прописаны хештеги';

const body = document.querySelector('body');
const formField = document.querySelector('.img-upload__form');
const uploadField = document.querySelector('#upload-file');
const overlayForm = document.querySelector('.img-upload__overlay');
const hashtagField = overlayForm.querySelector('.text__hashtags');
const commentField = overlayForm.querySelector('.text__description');
const cancelUploadButton = overlayForm.querySelector('.img-upload__cancel');

const pristine = new Pristine(formField, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error'
});

const FieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const isValidTag = (tag) => HASHTAGS_GUIDE.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_NUMBER_HASHTAGS;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAGS_ERROR_TEXT
);

const onCloseForm = () => {
  formField.reset();
  pristine.reset();
  overlayForm.classList.add('hidden');
  body.classList.remove('modal-open');
};

cancelUploadButton.addEventListener('click', () => {
  onCloseForm();
});

const closeFormByEscape = (evt) => {
  if (isEscapeKey(evt) && !FieldFocused()) {
    evt.preventDefault();
    onCloseForm();
    removeEventListener(document);
  }
};

const onSubmitForm = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

formField.addEventListener('submit', () => {
  onSubmitForm();
});

const onShowForm = () => {
  overlayForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeFormByEscape);
};

uploadField.addEventListener('change', () => {
  onShowForm();
});
