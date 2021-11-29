/**
 * * 题目名称：二叉树的最大深度
 * * 题目地址：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
 */

// * 思路：

// 深度优先，递归

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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');