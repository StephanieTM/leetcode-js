/** result 76ms 38M */


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  let left = 1, right = n;
  while (left < right) {
      const middle = Math.floor(left + (right - left) / 2);
      const result = guess(middle);
      if (result === 0) {
          left = middle;
          right = middle;
      } else if (result === -1) {
          right = middle;
      } else if (result === 1) {
          left = middle + 1;
      }
  }
  return left;
};
