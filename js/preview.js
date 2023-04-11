import { FILE_TYPES } from './constants.js';

const imgUploadElement = document.querySelector('.img-upload__input');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview img');
const effectPreviewElements = document.querySelectorAll('.effects__preview');

imgUploadElement.addEventListener('change', () => {
  const file = imgUploadElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (matches) {
    imgUploadPreviewElement.src = URL.createObjectURL(file);
    effectPreviewElements.forEach((effect) => {
      effect.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });
  }
});
