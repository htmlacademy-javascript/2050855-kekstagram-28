import { renderBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const renderPictureContent = (pictures) => {
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach(({ url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.addEventListener('click', () => renderBigPicture(url, likes, comments, description));
    pictureFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureFragment);
};

export { renderPictureContent };
