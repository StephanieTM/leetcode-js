/**
 * * 题目名称：有效的字母异位词
 * * 题目地址：https://leetcode-cn.com/problems/valid-anagram

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false

提示:
1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 */

// * 思路：

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.has(char) ? map.get(char) : 0) + 1);
  }

  for (const char of t) {
    if (!map.has(char)) {
      return false;
    }
    const n = map.get(char);
    if (n === 1) {
      map.delete(char);
    } else {
      map.set(char, n - 1);
    }
  }

  return !map.size;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');