/**
 * * 题目名称：左叶子之和
 * * 题目地址：https://leetcode-cn.com/problems/sum-of-left-leaves

计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

 */

// * 思路：

// 注意审题，左叶子，必须得是叶子结点
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
var sumOfLeftLeaves = function(root) {
  let sum = 0;

  const traverse = (node) => {
    if (!node) return;
    if (node.left && !node.left.left && !node.left.right) sum += node.left.val;
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);

  return sum;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');