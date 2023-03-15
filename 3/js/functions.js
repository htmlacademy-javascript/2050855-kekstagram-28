/* eslint-disable no-duplicate-case */
const checkLength = (str, len) => str.length <= len;
checkLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};
isPalindrome('Довод');

const extractsNumbers = (string) => {
  let result = '';
  switch (true) {
    case typeof string === 'number' && Number.isInteger(string):
      return Math.abs(string);
    case typeof string === 'number' && !Number.isInteger(string):
      result = string.toString().replace(/\./g , '');
      return Math.abs(result);
    default:
      for (let i = 0; i < string.length; i++) {
        if (!Number.isNaN(parseInt(string.at(i), 10))) {
          result += string.at(i);
        }
      }
      return parseInt(result, 10);
  }
};
extractsNumbers(-3.83);

const returnsAnAugmentedString = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
returnsAnAugmentedString('q', 4, 'werty');
