/**
 * * 题目名称：最长回文串
 * * 题目地址：https://leetcode-cn.com/problems/longest-palindrome

给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:
输入:
"abccccdd"
输出:
7
解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

 */

// * 思路：

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let result = 0;
  const map = new Map();
  for (const char of s) {
    const n = map.get(char) || 0;
    if (n % 2 === 1) {
      result += 2;
    }
    map.set(char, n + 1);
  }
  return result < char.length ? result + 1 : result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');