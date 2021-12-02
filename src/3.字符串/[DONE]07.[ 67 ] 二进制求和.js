/**
 * * 题目名称：二进制求和
 * * 题目地址：https://leetcode-cn.com/problems/add-binary

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

示例 1:
输入: a = "11", b = "1"
输出: "100"

示例 2:
输入: a = "1010", b = "1011"
输出: "10101"

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

 */

// * 思路：

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // let i = Math.max(a.length, b.length) - 1;
  let i = 1;
  let carry = 0;
  const result = [];
  while (carry !== 0 || a[a.length - i] || b[b.length - i]) {
    const x = Number(a[a.length - i] || 0);
    const y = Number(b[b.length - i] || 0);
    result.unshift((x + y + carry) % 2);
    carry = x + y + carry > 1 ? 1 : 0;
    i++;
  }
  return result.join('');
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');