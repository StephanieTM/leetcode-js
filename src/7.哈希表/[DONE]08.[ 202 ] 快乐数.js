/**
 * * 题目名称：快乐数
 * * 题目地址：https://leetcode-cn.com/problems/happy-number

编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果 可以变为  1，那么这个数就是快乐数。
如果 n 是快乐数就返回 true ；不是，则返回 false 。

示例 1：
输入：n = 19
输出：true
解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

示例 2：
输入：n = 2
输出：false

提示：
1 <= n <= 2^31 - 1

 */

// * 思路：

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let curr = n;
  const map = new Map();

  while (true) {
    let sum = 0;
    const s = String(curr);
    for (const char of s) {
      sum += (Number(char) ** 2);
    }
    if (sum === 1) return true;
    if (map.has(sum)) return false;
    curr = sum;
    map.set(sum, sum);
  };
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');