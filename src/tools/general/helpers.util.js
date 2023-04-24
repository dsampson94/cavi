/**
 * SCSS (BEM Model)
 * Joins a `baseClassName` together with an array of associated class `modifiers`.
 *
 * @param {string} baseClassName - the class name of the component,
 *  also used for prefixing modifiers
 * @param {object} modifiers - object with keys being the modifier name,
 *  their values being a boolean representing whether the modifier is active
 *
 * @example <caption>Get class names for element 'button' with modifier 'hollow'.</caption>
 * getClassNames('button', { hollow: true })
 * returns 'button button--hollow'
 */
export const getClassNames = (baseClassName, modifiers = {}) => {
  const classes = [baseClassName];
  Object.entries(modifiers).forEach(([name, active]) => {
    if (!active) return;
    classes.push(`${ baseClassName }--${ name }`);
  });
  return classes.join(' ');
};

export const toBase64String = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
};

export const removeCamelCase = (key) => {
  let copyOfKey = key.repeat(1);
  copyOfKey = copyOfKey.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1').replace(/^./, s => s.toUpperCase());
  return copyOfKey;
};

export const deepClone = (object) => {
  if (!object) return;
  return JSON.parse(JSON.stringify(object));
};

export const objectToBase64 = (object) => {
  if (!object) return;
  return btoa(JSON.stringify(object));
};

export const base64ToObject = (base64String) => {
  if (!base64String) return;
  return JSON.parse(atob(base64String));
};

export const daysFromToday = (daysFromToday) => {
  const dateList = new Date(Date.now() + 1000 * 60 * 60 * 24 * daysFromToday).toString().split(' ');
  return `${ dateList[0] } ${ dateList[2] }`;
};

export const getDaysPastDateBy2 = (days) => {
  const timestamp = new Date().getTime() - 1000 * 60 * 60 * 24 * days * 2;
  return timestamp;
};

export const generateId = () => `_${ Math.random().toString(36).substring(2, 9) }`;

export const isEmpty = (value) => !value || value.length === 0;

export const isUndefined = (value) => typeof value === 'undefined';

export const noOp = () => {
};

export const chooseRandom = (numbers) => {
  let randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
};

export const getProgress = () => {
  const progress = [99.99];
  let randomIndex = Math.floor(Math.random() * progress.length);
  return progress[randomIndex];
};

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

export const isOlderThan24Hours = (dateString) => {
  if (!dateString) return false;
  const currentTime = new Date();
  const lastReading = new Date(dateString);
  const differenceInMilliseconds = currentTime - lastReading;
  const millisecondsIn24Hours = 24 * 60 * 60 * 1000;
  return differenceInMilliseconds > millisecondsIn24Hours;
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${ year }/${ month }/${ day }`;
};

export function formatDateTime(date) {
  if (!date) return;
  return date?.toISOString()?.replace('T', ' ')?.slice(0, 19)?.replace('-', '/')?.replace('-', '/');
}
