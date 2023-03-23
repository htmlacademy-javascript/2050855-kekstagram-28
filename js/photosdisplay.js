const thumbnailTemplate = document
  .querySelector('#picture').content;
const container = document.querySelector('.pictures');
const thumbnailListFragment = document.createDocumentFragment();

const renderThumbnails = (picture) => {
  picture.forEach(({ url, description, likes, comments }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnailListFragment.appendChild(thumbnail);
  });
  container.appendChild(thumbnailListFragment);
};

export { renderThumbnails };
