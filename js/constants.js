const COMMENT_STEP_COUNT = 5;

const MAX_NUMBER_HASHTAGS = 5;

const TAGS_ERROR_TEXT = 'Неправильно прописаны хештеги';

const HASHTAGS_GUIDE = /^#[a-zа-яё0-9]{1,19}$/i;

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const ALERT_SHOW_TIME = 5000;

const RANDOM_IMAGE_MAX = 10;

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const TIMEOUT_DELAY = 500;

export {
  COMMENT_STEP_COUNT,
  MAX_NUMBER_HASHTAGS,
  TAGS_ERROR_TEXT,
  HASHTAGS_GUIDE,
  EFFECTS,
  BASE_URL,
  Route,
  Method,
  ErrorText,
  ALERT_SHOW_TIME,
  RANDOM_IMAGE_MAX,
  TIMEOUT_DELAY,
  FILE_TYPES
};
