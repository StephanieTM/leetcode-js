/**
 * * 题目名称：对称二叉树
 * * 题目地址：https://leetcode-cn.com/problems/symmetric-tree

给定一个二叉树，检查它是否是镜像对称的。

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return check(root.left, root.right);
};

function check(node1, node2) {
  if (!node1 && !node2) return true; // 都是 null
  if (!node1 || !node2) return false; // 只有一个是 null
  return node1.val === node2.val && check(node1.left, node2.right) && check(node1.right, node2.left);
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');