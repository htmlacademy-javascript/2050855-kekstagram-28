import './user-form.js';
import { hideForm } from './user-form.js';
import { renderPictureContent } from './miniature.js';
import { setFormSubmit } from './validation.js';
import { getData } from './api.js';
import { showAlert } from './util.js';


getData()
  .then((pictures) => {
    renderPictureContent(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setFormSubmit(hideForm);

