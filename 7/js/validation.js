const MAX_NUMBER_HASHTAGS = 5;
const TAGS_ERROR_TEXT = 'Неправильно прописаны хештеги';
const HASHTAGS_GUIDE = /^#[a-zа-яё0-9]{1,19}$/i;

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

const setFormSubmit = () => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    const isValid = pristine.validate();
    if (isValid) {
      unblockSubmitButton();
    }
  });
};

export {setFormSubmit, pristine, unblockSubmitButton};
