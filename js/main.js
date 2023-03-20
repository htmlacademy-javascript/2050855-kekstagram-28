const PHOTO_COUNT = 25;
const AVATAR_MAX_COUNT = 6;
const AVATAR_MIN_COUNT = 1;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Да, да! В это зеркало я буду фоткаться до тех пор, пока не состарюсь.',
  'Диснеевская принцесса, которую вы заслужили.',
  'Знали бы вы, что у меня на уме.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Ох, и достанется кому-то такая красота!',
  'Я, снова я и опять я.',
  'Я не одна на миллион, я одна из 8 миллиардов.',
  'Мне нравится быть собой.',
  'Может быть, немного стройнее и с меньшим количеством морщин.',
  'Оставлю за собой право не соответствовать вашим ожиданиям.'
];

const NAMES = [
  'Маша',
  'Саша',
  'Владимир',
  'Павел',
  'Ольга',
  'Инга',
];
const commentId = generateUniqueNumber();

function generateUniqueNumber() {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhotoContent = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(1, COMMENT_COUNT) },
    createComment
  ),
});

const getContent = () =>
  Array.from({ length: PHOTO_COUNT }, (_, pictureIndex) =>
    createPhotoContent(pictureIndex + 1)
  );

getContent();
