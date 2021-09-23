/**
 * * 题目名称：合并排序的数组
 * * 题目地址：https://leetcode-cn.com/problems/sorted-merge-lcci

给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
说明:

A.length == n + m

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sorted-merge-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  let i = m - 1, j = n - 1, p = m + n - 1;
  while (p >= 0) {
    if (A[i] >= B[j] || j < 0) {
      A[p] = A[i--];
    } else {
      A[p] = B[j--];
    }
    p--;
  }
}

// 测试用例
let A = [1, 5, 9, 0, 0, 0, 0], B = [2, 4, 6, 7];

console.time('执行用时');
console.log(merge(A, 3, B, 4));
console.log('A :>> ', A);
console.timeEnd('执行用时');