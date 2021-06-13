/** result 76ms 37.8M */


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
      return binarySearch(0, n, isBadVersion);
  };
};

function binarySearch(startIdx, endIdx, checkFn) {
  if (startIdx > endIdx) {
      // not found
      return -1;
  }
  const middle = parseInt(startIdx + (endIdx - startIdx) / 2, 10);

  if (checkFn(middle) && (middle === 1 || !checkFn(middle - 1))) {
      return middle;
  }

  // look forward
  if (checkFn(middle)) {
      return binarySearch(startIdx, middle - 1, checkFn);
  }

  // look backward
  return binarySearch(middle + 1, endIdx, checkFn);
}
