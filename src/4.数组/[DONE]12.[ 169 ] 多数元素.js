/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：[3,2,3]
输出：3

示例 2：
输入：[2,2,1,1,1,2,2]
输出：2

进阶：
尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

 */

// * 思路：

// 摩尔投票算法
// https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let candidate, count = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count++;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');