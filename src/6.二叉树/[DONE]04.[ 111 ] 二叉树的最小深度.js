/**
 * * 题目名称：二叉树的最小深度
 * * 题目地址：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

示例 1：
输入：root = [3,9,20,null,null,15,7]
输出：2

示例 2：
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5

提示：
树中节点数的范围在 [0, 10^5] 内
-1000 <= Node.val <= 1000

 */

// * 思路：

// 方法一：广度优先
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

  const queue = [root];
  let result = 1;
  while (queue.length) {
    const n = queue.length;
    let i = 0;
    while (i < n) {
      const node = queue.shift();
      if (!node.left && !node.right) return result;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      i++;
    }
    result++;
  }
  return result;
};

// 方法二：深度优先
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

  let min_depth = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    min_depth = Math.min(minDepth(root.left), min_depth);
  }
  if (root.right) {
    min_depth = Math.min(minDepth(root.right), min_depth);
  }

  return min_depth + 1;
};

function calculate(root, parentDepth) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return Math.min(calculate(root.left, parentDepth), calculate(root.right, parentDepth));
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');