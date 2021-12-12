/**
 * * 题目名称：二叉搜索树节点最小距离
 * * 题目地址：https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes

给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

差值是一个正数，其数值等于两值之差的绝对值。

示例 1：
输入：root = [4,2,6,1,3]
输出：1

示例 2：
输入：root = [1,0,48,null,null,12,49]
输出：1

提示：
树中节点的数目范围是 [2, 100]
0 <= Node.val <= 105

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
 * @return {number}
 */
var minDiffInBST = function(root) {
  let prev = null, result = Number.MAX_SAFE_INTEGER;

  const traverse = (node) => {
    if (node.left) traverse(node.left);

    if (prev !== null) {
      result = Math.min(result, node.val - prev);
    }
    prev = node.val;

    if (node.right) traverse(node.right);
  };

  traverse(root);

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');