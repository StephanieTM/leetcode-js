/**
 * * 题目名称：字符串相加
 * * 题目地址：https://leetcode-cn.com/problems/add-strings

给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何内建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

示例 1：
输入：num1 = "11", num2 = "123"
输出："134"

示例 2：
输入：num1 = "456", num2 = "77"
输出："533"

示例 3：
输入：num1 = "0", num2 = "0"
输出："0"

提示：
1 <= num1.length, num2.length <= 104
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零

 */

// * 思路：

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = 1;
  let carry = 0;
  const result = [];

  while (carry !== 0 || num1[num1.length - i] || num2[num2.length - i]) {
    const x = Number(num1[num1.length - i] || 0);
    const y = Number(num2[num2.length - i] || 0);

    const quotient = Math.floor((x + y + carry) / 10);
    const remainder = (x + y + carry) % 10;
    result.unshift(remainder);
    carry = quotient >= 1 ? quotient : 0;

    i++;
  }

  return result.join('');
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');