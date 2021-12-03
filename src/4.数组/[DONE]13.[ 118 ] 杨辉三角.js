/**
 * * 题目名称：杨辉三角
 * * 题目地址：https://leetcode-cn.com/problems/pascals-triangle

给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

示例 2:
输入: numRows = 1
输出: [[1]]

提示:
1 <= numRows <= 30

 */

// * 思路：

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];

  let n = 0;
  while (n < numRows) {
    const row = new Array(n + 1).fill(1);
    let i = 1;
    while (i < n) {
      row[i] = result[n - 1][i - 1] + result[n - 1][i];
      i++;
    }
    result.push(row);
    n++;
  }

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');