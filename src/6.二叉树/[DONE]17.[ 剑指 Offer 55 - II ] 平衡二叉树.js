/**
 * * 题目名称：平衡二叉树
 * * 题目地址：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

示例 1:
给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

限制：
0 <= 树的结点个数 <= 10000

 */

// * 思路：

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return check(root) > -1;
};

function check(node) {
  if (!node) return 0;
  if (!node.left && !node.right) return 1;
  const left = check(node.left);
  const right = check(node.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');