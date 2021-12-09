/**
 * * 题目名称：二叉树的堂兄弟节点
 * * 题目地址：https://leetcode-cn.com/problems/cousins-in-binary-tree

在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

示例 1：
输入：root = [1,2,3,4], x = 4, y = 3
输出：false

示例 2：
输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true

示例 3：
输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false

提示：
二叉树的节点数介于 2 到 100 之间。
每个节点的值都是唯一的、范围为 1 到 100 的整数。

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const queue = [root];

  while (queue.length) {
    const n = queue.length;
    let idx = -1, idy = -1;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node) {
        if (node.val === x) idx = i;
        if (node.val === y) idy = i;
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (idx > -1 && idy > -1) {
      return Math.floor(idx / 2) !== Math.floor(idy / 2);
    }
    if (idx === -1 && idy === -1) {
      continue;
    }
    return false;
  }

};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');