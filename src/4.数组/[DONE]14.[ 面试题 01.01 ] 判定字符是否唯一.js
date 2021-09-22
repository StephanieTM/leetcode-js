/**
 * * 题目名称：判定字符是否唯一
 * * 题目地址：https://leetcode-cn.com/problems/is-unique-lcci

实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false 
示例 2：

输入: s = "abc"
输出: true
限制：

0 <= len(s) <= 100
如果你不使用额外的数据结构，会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-unique-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

// 隐含前提：字符串只包含26个小写字母，既可以用位运算

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let chars = 0;

  for (let char of astr) {
    const distance = char.charCodeAt(0) - 'a'.charCodeAt(0); // 当前字符与a的距离
    const bin = 1 << distance;
    if (chars & bin) {
      return false;
    } else {
      chars |= bin;
    }
  }
  return true;
};

// 测试用例
let test = 'abcc'

console.time('执行用时');
console.log(isUnique(test));
console.timeEnd('执行用时');