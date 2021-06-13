/** result 80ms 37.5M */


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1, right = n;
      while (left < right) {
          const middle = Math.floor(left + (right - left) / 2);
          if (isBadVersion(middle)) {
              right = middle;
          } else {
              left = middle + 1;
          }
      }
      return left;
  };
};
