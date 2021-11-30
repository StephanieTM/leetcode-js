/**
 * * 题目名称：斐波那契数列
 * * 题目地址：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：1

示例 2：
输入：n = 5
输出：5

提示：
0 <= n <= 100

 */

// * 思路：

// https://www.cnblogs.com/superlizhao/p/11603158.html

// 方法一：普通递归，重复计算，44会超时

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return (fib(n - 1) + fib(n - 2)) % 1000000007;
};


// 方法二：滑动窗口
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let a = 0, b = 1;
  while (n > 0) {
    b = a + b; // new b = old a + old b
    a = b - a; // new a = old b = new b - old a
    b = b % 1000000007;
    n--;
  }
  return a;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');