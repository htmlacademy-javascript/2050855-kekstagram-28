import './user-form.js';
//import { getContent } from './data.js';
import { openErrorMessage, openSuccessMessage} from './message.js';
import { hideForm } from './user-form.js';
import { renderPictureContent } from './miniature.js';
import { setFormSubmit } from './validation.js';
import { getData } from './api.js';
import { showAlert } from './util.js';


getData()
  .then((pictures) => {
    renderPictureContent(pictures);
    openSuccessMessage();
  })
  .catch((err) => {
    showAlert(err.message);
    openErrorMessage();
  });

setFormSubmit(hideForm);

/*
setFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideForm();
    openSuccessMessage();
  } catch {
    openErrorMessage();
  }
});

try {
  const data = await getData();
  renderPictureContent(data);
} catch (err) {
  showAlert(err.message);
}*/
