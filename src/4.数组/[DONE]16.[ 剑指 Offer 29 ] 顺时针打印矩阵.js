/**
 * * 题目名称：顺时针打印矩阵
 * * 题目地址：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof

给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/*
第一行 -> 最后一列 -> 最后一行 -> 第一列
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // m行n列
  const m = matrix.length, n = matrix[0].length;
  const result = [];
  let curRow = 0, curColumn = 0;
  let minRow = 0, minColumn = 0, maxRow = m - 1, maxColumn = n - 1;
  let direction = 0;
  while (result.length < m * n) {
    if (direction % 4 === 0) {
      if (curColumn <= maxColumn) {
        result.push(matrix[curRow][curColumn]);
        curColumn++;
      } else {
        curColumn--;
        curRow++;
        minRow++;
        direction++;
      }
    } else if (direction % 4 === 1) {
      if (curRow <= maxRow) {
        result.push(matrix[curRow][curColumn]);
        curRow++;
      } else {
        curRow--;
        curColumn--;
        maxColumn--;
        direction++;
      }
    } else if (direction % 4 === 2) {
      if (curColumn >= minColumn) {
        result.push(matrix[curRow][curColumn]);
        curColumn--;
      } else {
        curColumn++;
        curRow--;
        maxRow--;
        direction++;
      }
    } else {
      if (curRow >= minRow) {
        result.push(matrix[curRow][curColumn]);
        curRow--;
      } else {
        curRow++;
        curColumn++;
        minColumn++;
        direction++;
      }
    }
  }
  return result;
};


// 测试用例
let test = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

console.time('执行用时');
console.log(spiralOrder(test));
console.timeEnd('执行用时');