import './user-form.js';
import './validation.js';
import { getContent } from './data.js';
import { renderPictureContent } from './miniature.js';
import { setFormSubmit } from './validation.js';

renderPictureContent(getContent());
setFormSubmit();
