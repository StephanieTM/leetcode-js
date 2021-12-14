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
[4, 9, 5]
[9, 4, 8]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];
  let left = 0, right = 0, pre;

  while (left < nums1.length && right < nums2.length) {
    const l = nums1[left], r = nums2[right];
    if (l === r) {
      if (l !== pre) result.push(l);
      pre = l;
      left++;
      right++;
    } else if (l < r) {
      left++;
    } else {
      right++;
    }
  }

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');