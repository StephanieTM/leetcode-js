/**
 * * 题目名称：最大子序和
 * * 题目地址：https://leetcode-cn.com/problems/maximum-subarray

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。 

示例 1：
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：
输入：nums = [1]
输出：1

示例 3：
输入：nums = [5,4,-1,7,8]
输出：23

提示：
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。

 */

// * 思路：
// 方法一：动态规划
// 假设 f(i) 是以 i 结尾的最大子序和
// 则有 f(i) = max( f(i - 1) + nums[i], nums[i] )
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let dp = [nums[0]], max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(dp[i], max);
  }

  return max;
};

// 方法二：优化空间后的动态规划
// 假设 f(i) 是以 i 结尾的最大子序和
// 则有 f(i) = max( f(i - 1) + nums[i], nums[i] )
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = nums[0], max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(pre, max);
  }

  return max;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');