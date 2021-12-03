/**
 * * 题目名称：使用最小花费爬楼梯
 * * 题目地址：https://leetcode-cn.com/problems/min-cost-climbing-stairs

数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。

每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。

请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

示例 1：
输入：cost = [10, 15, 20]
输出：15
解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。

示例 2：
输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出：6
解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。

提示：
cost 的长度范围是 [2, 1000]。
cost[i] 将会是一个整型数据，范围为 [0, 999] 。

 */

// * 思路：
// 方法一：动态规划
// dp[0] = 0, dp[1] = 0;
// dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const length = cost.length;
  const dp = [];
  dp[0] = 0; // 到达第 0 级无需花费
  dp[1] = 0; // 到达第 1 级无需花费

  for (let i = 2; i < length + 1; i++) { // 要到达最后一层的楼顶，故 i < length + 1
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[length];
};

// 方法二：优化后的动态规划
// dp[0] = 0, dp[1] = 0;
// dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const length = cost.length;
  let pre = 0, next = 0;

  for (let i = 2; i < length + 1; i++) { // 要到达最后一层的楼顶，故 i < length + 1
    const temp = next;
    next = Math.min(pre + cost[i - 2], next + cost[i - 1]);
    pre = temp;
  }

  return next;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');