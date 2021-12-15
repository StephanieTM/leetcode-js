/**
 * * 题目名称：单词规律
 * * 题目地址：https://leetcode-cn.com/problems/word-pattern

给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:
输入: pattern = "abba", str = "dog cat cat dog"
输出: true

示例 2:
输入:pattern = "abba", str = "dog cat cat fish"
输出: false

示例 3:
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false

示例 4:
输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。

 */

// * 思路：

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const map1 = new Map(), map2 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (map1.has(pattern[i])) {
      map1.set(pattern[i], `${map1.get(pattern[i])}-${i}`);
    } else {
      map1.set(pattern[i], `${i}`);
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (map2.has(words[i])) {
      map2.set(words[i], `${map2.get(words[i])}-${i}`);
    } else {
      map2.set(words[i], `${i}`);
    }
  }

  const pat1 = map1.values(), pat2 = map2.values();

  while (true) {
    const v1 = pat1.next(), v2 = pat2.next();
    if (v1.done && v2.done) break;
    if (v1.value !== v2.value) {
      return false;
    }
  }
  return true;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');