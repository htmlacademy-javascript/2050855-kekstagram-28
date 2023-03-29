import { renderPictureContent } from './miniature.js';
import { renderFullPicture } from './big-picture.js';

const сontainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  сontainer.addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('[data-pictureElement-id]');
    if (!pictureElement) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +pictureElement.dataset.pictureElementId
    );
    renderFullPicture(picture);
  });
  renderPictureContent(pictures, сontainer);
};

export { renderGallery };

