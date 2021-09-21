/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci

给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
说明：

0 <= len(s1) <= 100
0 <= len(s2) <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-permutation-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0)+1);
  }

  for (let i = 0; i < s2.length; i++) {
    if (!map.has(s2[i])) {
      return false;
    }
    const count = map.get(s2[i]);
    if (count < 1) {
      return false;
    }
    if (count === 1) {
      map.delete(s2[i]);
    } else {
      map.set(s2[i], count - 1);
    }
  }

  return !Array.from(map).length;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');