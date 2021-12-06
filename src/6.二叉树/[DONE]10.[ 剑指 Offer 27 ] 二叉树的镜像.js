/**
 * * 题目名称：二叉树的镜像
 * * 题目地址：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

示例 1：
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

限制：
0 <= 节点个数 <= 1000

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
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if (!root) return null;
  if (!root.left && !root.right) return root;
  const newLeft = mirrorTree(root.right);
  const newRight = mirrorTree(root.left);
  root.left = newLeft;
  root.right = newRight;

  return root;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');