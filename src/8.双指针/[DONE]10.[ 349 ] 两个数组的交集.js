/**
 * * 题目名称：两个数组的交集
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-arrays

给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

说明：
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
 */

// * 思路：

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const result = [];
  const s1 = new Set(nums1), s2 = new Set(nums2);

  s1.forEach(n => {
    if (s2.has(n)) {
      result.push(n);
    }
  });

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');