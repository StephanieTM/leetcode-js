/**
 * * 题目名称：二叉树的最小深度
 * * 题目地址：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：2

示例 2：
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5

 */

// * 思路：


// 广度优先，迭代
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
var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let depth = 2;
  const list = [];
  if (root.left) list.push(root.left);
  if (root.right) list.push(root.right);

  while (list.length) {
    const num = list.length;
    for (let i = 0; i < num; i++) {
      const node = list.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) list.push(node.left);
      if (node.right) list.push(node.right);
    }
    depth++;
  }

  return depth;
};


// 深度优先，递归
var minDepth2 = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let depth = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    depth = Math.min(depth, minDepth2(root.left));
  }
  if (root.right) {
    depth = Math.min(depth, minDepth2(root.right));
  }

  return depth + 1;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');