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

/*

逆向双指针

A = [1, 4, 6, 7, 0, 0, 0], m = 4
B = [2, 5, 9], n = 3

初始
i = m - 1;
j = n - 1;
p = m + n - 1;

1. i = 3, j = 2, p = 6, A[i] < B[j], A[p] = B[j], j--, p--, A: [1, 4, 6, 7, 0, 0, 9]
2. i = 3, j = 1, p = 5, A[i] > B[j], A[p] = A[i], i--, p--, A: [1, 4, 6, 7, 0, 7, 9]
3. i = 2, j = 1, p = 4, A[i] > B[j], A[p] = A[i], i--, p--, A: [1, 4, 6, 7, 6, 7, 9]
4. i = 1, j = 1, p = 3, A[i] < B[j], A[p] = B[j], j--, p--, A: [1, 4, 6, 5, 6, 7, 9]
5. i = 1, j = 0, p = 2, A[i] > B[j], A[p] = A[i], i--, p--, A: [1, 4, 4, 5, 6, 7, 9]
6. i = 0, j = 0, p = 1, A[i] < B[j], A[p] = B[j], j--, p--, A: [1, 2, 4, 5, 6, 7, 9]
7. i = 0, j < 0, 结束

*/


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
    } else if (A[i] < B[j] || i < 0) {
      A[p] = B[j--];
    }
    p--;
  }
};

// 测试用例
let A = [4,6,7,0,0,0], B = [1,2,5,9];

console.time('执行用时');
console.log(merge(A, 3, B, 4));
console.log('A :>> ', A);
console.timeEnd('执行用时');