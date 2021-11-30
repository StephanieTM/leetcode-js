/**
 * * 题目名称：青蛙跳台阶问题
 * * 题目地址：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof

一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：2

示例 2：
输入：n = 7
输出：21

示例 3：
输入：n = 0
输出：1

提示：
0 <= n <= 100

 */

// * 思路：

// 假设跳 n 级台阶一共有 f(n) 种跳法
// 只考虑最后一跳，要么是一步，要么是两步
// 跳 n - 1 级台阶的 f(n - 1) 种方法只需要都再跳 1 步即可到达 n 级
// 跳 n - 2 级台阶的 f(n - 2) 种方法只需要都再跳 2 步即可到达 n 级
// 即 f(n) = f(n - 1) + f(n - 2)
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let a = 1, b = 1;
  while (n > 0) {
    b = a + b;
    a = b - a;
    b %= 1000000007;
    n--;
  }
  return a;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');