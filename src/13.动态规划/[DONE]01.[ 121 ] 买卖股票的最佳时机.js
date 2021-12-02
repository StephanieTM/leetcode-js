/**
 * * 题目名称：买卖股票的最佳时机
 * * 题目地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock

给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

提示：

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4

 */

// * 思路：

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minprice = prices[0], maxprofit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
    if (prices[i] < minprice) {
      minprice = prices[i];
    }
  }

  return maxprofit;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');