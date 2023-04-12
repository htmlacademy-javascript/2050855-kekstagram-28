import { shuffleArray, debounce } from './util.js';
import { renderPictureContent, removePhotoContent } from './miniature.js';
import { RANDOM_IMAGE_MAX, TIMEOUT_DELAY } from './constants.js';

const imageFiltersElement = document.querySelector('.img-filters');
const imageFilterButtonElements = document.querySelectorAll('.img-filters__button');
const defaultFilterButtonElement = document.querySelector('#filter-default');
const randomFilterButtonElement = document.querySelector('#filter-random');
const discussedFilterButtonElement = document.querySelector('#filter-discussed');

const getImageRank = (image) => image.comments.length;

const compareImages = (imageA, imageB) => {
  const rankA = getImageRank(imageA);
  const rankB = getImageRank(imageB);

  return rankB - rankA;
};

const getFilterDiscussedPhotoContent = (images) => {
  const popularImages = images.slice();
  return popularImages.sort(compareImages);
};

const getFilterRandomPhotoContent = (images) => {
  const randomImages = shuffleArray(images.slice());
  return randomImages.slice(0, RANDOM_IMAGE_MAX);
};

const getFilterDefaultPhotoContent = (images) => images.slice();

const onFilter = (button, photos) => {
  switch (button) {
    case discussedFilterButtonElement:
      removePhotoContent();
      renderPictureContent(getFilterDiscussedPhotoContent(photos));
      break;
    case randomFilterButtonElement:
      removePhotoContent();
      renderPictureContent(getFilterRandomPhotoContent(photos));
      break;
    case defaultFilterButtonElement:
      removePhotoContent();
      renderPictureContent(getFilterDefaultPhotoContent(photos));
      break;
    default:
      removePhotoContent();
      renderPictureContent(getFilterDefaultPhotoContent(photos));
      break;
  }
};

const onFilterButton = (button, photos) => {
  const active = 'img-filters__button--active';

  button.addEventListener('click', () => {
    if (!button.classList.contains(active)) {
      imageFilterButtonElements.forEach((item) => {
        item.classList.remove(active);
      });

      button.classList.add(active);
      onFilter(button, photos);
    }
  });
};

const filterPictureContent = (photos) => {
  imageFiltersElement.classList.remove('img-filters--inactive');
  imageFilterButtonElements.forEach((button) => debounce(onFilterButton(button, photos), TIMEOUT_DELAY));
};

export { filterPictureContent };
