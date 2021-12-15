/**
 * * 题目名称：字符串中的第一个唯一字符
 * * 题目地址：https://leetcode-cn.com/problems/first-unique-character-in-a-string

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2

提示：你可以假定该字符串只包含小写字母。

 */

// * 思路：

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? -1 : i);
  }

  return (Array.from(map.entries()).find(item => item[1] !== -1) || [-1, -1])[1];
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');