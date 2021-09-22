/**
 * * 题目名称：验证回文串
 * * 题目地址：https://leetcode-cn.com/problems/valid-palindrome

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

 

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串
 

提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome1 = function(s) {
  if (!s) {
    return true;
  }

  const numberCode = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
  const azCode = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
  const AZCode = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
  let charCodes = [];

  for (let char of s) {
    const charCode = char.charCodeAt(0);
    if (charCode >= numberCode[0] && charCode <= numberCode[1]) {
      // number
      charCodes.push(charCode);
    } else if (charCode >= azCode[0] && charCode <= azCode[1]) {
      // a-z
      charCodes.push(charCode);
    } else if (charCode >= AZCode[0] && charCode <= AZCode[1]) {
      // A-Z
      charCodes.push(charCode + 32);
    }
  }

  if (!charCodes.length) {
    return true;
  }

  if (charCodes.length % 2) {
    for (let i = 0; i < Math.floor(charCodes.length / 2); i++) {
      if (charCodes[i] !== charCodes[charCodes.length - 1 - i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < charCodes.length / 2; i++) {
      if (charCodes[i] !== charCodes[charCodes.length - 1 - i]) {
        return false;
      }
    }
  }

  return true;
};


// ----------------------------------------------------------------------------


// 双指针，无额外空间

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function(s) {
  if (!s) {
    return true;
  }

  let left = 0, right = s.length - 1;

  while (left < right) {
    if (!/([a-z]|[A-Z]|[0-9])+/.test(s[left])) {
      left++;
      continue;
    }
    if (!/([a-z]|[A-Z]|[0-9])+/.test(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// 测试用例
let test = 'O   P o'

console.time('执行用时');
console.log(isPalindrome2(test));
console.timeEnd('执行用时');