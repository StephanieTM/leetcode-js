/**
 * * 题目名称：二叉树的层平均值
 * * 题目地址：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree

给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

示例 1：
输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。

提示：
节点值的范围在32位有符号整数范围内。

 */

// * 思路：

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const queue = [root], result = [];

  while (queue.length) {
    const n = queue.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(sum/n);
  }

  return result;
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');