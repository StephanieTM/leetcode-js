/**
 * * 题目名称：找不同
 * * 题目地址：https://leetcode-cn.com/problems/find-the-difference

给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

示例 1：
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。

示例 2：
输入：s = "", t = "y"
输出："y"

示例 3：
输入：s = "a", t = "aa"
输出："a"

示例 4：
输入：s = "ae", t = "aea"
输出："a"

提示：
0 <= s.length <= 1000
t.length == s.length + 1
s 和 t 只包含小写字母

 */

// * 思路：

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of t) {
    if ((map.get(char) || 0) < 1) {
      return char;
    }
    map.set(char, map.get(char) - 1);
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');