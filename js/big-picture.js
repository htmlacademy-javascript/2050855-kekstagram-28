import { photoModalOpen, photoModalCloseClickHandler } from './fullscreen-modal.js';

const COMMENTS_PER_PORTION = 5;
const picturePhoto = document.querySelector('.big-picture__img img');
const closeModalButton = document.querySelector('.big-picture__cancel');
const pictureDescription = document.querySelector('.social__caption');
const pictureLikeCounter = document.querySelector('.likes-count');
const pictureAllComments = document.querySelector('.comments-count');
const commentLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');

let commentsShow = 0;
let currentComments = [];


const renderAllComments = (data) => {
  const comment = commentItem.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;
  return(comment);
};

const showFirstComments = () => {
  commentsShow += COMMENTS_PER_PORTION;

  if (commentsShow >= currentComments.length) {
    commentLoader.classList.add('hidden');
    commentsShow = currentComments.length;
  } else {
    commentLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShow; i++) {
    const commentElement = renderAllComments(currentComments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${commentsShow} из <span class="comments-count"> комментариев`;
};

function commentLoadClickHandler() {
  const additionalComments = currentComments.slice(
    commentList.children.length,
    commentList.children.length + COMMENTS_PER_PORTION,
  );
  const renderMoreComments = renderAllComments(additionalComments);

  commentList.appendChild(renderMoreComments);

  if (currentComments.length === commentList.children.length) {
    commentLoader.classList.add('hidden');
  }

  commentCount.firstChild.textContent = `${commentList.children.length } из  `;
}

function renderFullPicture(url, likes, description, comments) {
  photoModalOpen();
  picturePhoto.src = url;
  pictureLikeCounter.textContent = likes;
  pictureAllComments.textContent = comments.length;
  pictureDescription.textContent = description;


  commentList.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text">textContent=""</p>';
  currentComments = comments;

  closeModalButton.addEventListener('click', photoModalCloseClickHandler);
  commentLoader.addEventListener('click', commentLoadClickHandler);
  showFirstComments(comments);
}

export { renderFullPicture };
