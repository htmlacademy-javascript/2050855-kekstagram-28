import './preview.js';
import { closeFormAndRemoveEscapeListener, hideFormAndRemoveAllListener } from './user-form.js';
import { setFormSubmit } from './validation.js';
import { renderPictureContent } from './miniature.js';
import { getData } from './api.js';
import { openLoadingMessage } from './message.js';
import { filterPictureContent } from './filters.js';

openLoadingMessage();

getData(
  (photos) => {
    document.querySelector('.loading').classList.add('hidden');
    renderPictureContent(photos);
    filterPictureContent(photos);
  }
);

setFormSubmit(hideFormAndRemoveAllListener, closeFormAndRemoveEscapeListener);
