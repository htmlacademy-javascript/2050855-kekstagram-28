import {
  BASE_URL,
  Route,
  Method,
  ErrorText
} from './constants.js';

const getLoad = (route, errorText, onSuccess) => {
  fetch(`${BASE_URL}${route}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorText);
      }
      return response.json();
    })
    .then((photos) => onSuccess(photos))
    .catch(() => {
      throw new Error(errorText);
    });
};

const sendLoad = (route, errorText, method, onSuccess, onFail, body) => {
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        onFail();
        return;
      }
      onSuccess();
    })
    .catch(() => {
      onFail();
      throw new Error(errorText);
    });
};

const getData = (onSuccess) => getLoad(Route.GET_DATA, ErrorText.GET_DATA, onSuccess);

const sendData = (onSuccess, onFail, body) => sendLoad(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, onSuccess, onFail, body);

export { getData, sendData };
