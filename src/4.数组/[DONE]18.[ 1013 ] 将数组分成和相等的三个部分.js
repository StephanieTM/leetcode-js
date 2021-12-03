/**
 * * 题目名称：将数组分成和相等的三个部分
 * * 题目地址：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum

给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 就可以将数组三等分。

示例 1：
输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

示例 2：
输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
输出：false

示例 3：
输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

提示：
3 <= arr.length <= 5 * 104
-104 <= arr[i] <= 104

 */

// * 思路：

// 三个部分和相等，即每部分的和 = 数组和 / 3
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  if (sum % 3 > 0) return false;
  const partSum = sum / 3;
  let point1 = -1, point2 = -1, point3 = -1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    if (count === partSum) {
      if (point1 === -1) point1 = i + 1;
      else if (point2 === -1) point2 = i + 1;
      else if (point3 === -1) point3 = i + 1;
      count = 0;
    }
  }

  if (point1 === -1 || point2 === -1 || point3 === -1) {
    return false;
  }
  if (point3 !== arr.length) {
    // 边界场景[0, 0, 0, 0]
    count = 0;
    for (let i = point3; i < arr.length; i++) {
      count += arr[i];
    }
    return count === 0;
  }
  return true;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');