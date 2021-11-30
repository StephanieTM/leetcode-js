/**
 * * 题目名称：爬楼梯
 * * 题目地址：https://leetcode-cn.com/problems/climbing-stairs

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

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
var climbStairs = function(n) {
  let a = 1, b = 2;
  while (n > 1) {
    b = a + b;
    a = b - a;
    n--;
  }
  return a;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');