// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
   // Convert number to string
   const str = value.toString();
    
   // Reverse the string
   const reversedStr = str.split('').reverse().join('');
   
   // Compare original and reversed strings
   return str === reversedStr;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  input?.split('.');
  var respond = '';
  // Check if input is null, undefined, or empty
  if (input === null || input === undefined || input.trim() === '') {
    respond = 'Required field';
  }
  // Check if input is a valid number (not NaN and not 0)
  else if (isNaN(Number(input)) || Number(input) === 0) {
    respond = 'Must be a number besides 0';
  }

  return respond;
}

