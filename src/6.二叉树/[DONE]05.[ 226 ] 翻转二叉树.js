/**
 * * 题目名称：翻转二叉树
 * * 题目地址：https://leetcode-cn.com/problems/invert-binary-tree

翻转一棵二叉树。

 */

// * 思路：

// 思路1: 从下到上递归

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// 思路2: 从上到下递归

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
 * @return {TreeNode}
 */
var invertTree2 = function(root) {
  if (root === null) {
    return null;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree2(root.left);
  invertTree2(root.right);
  return root;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');