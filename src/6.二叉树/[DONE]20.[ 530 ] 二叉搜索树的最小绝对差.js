/**
 * * 题目名称：二叉搜索树的最小绝对差
 * * 题目地址：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst

给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

差值是一个正数，其数值等于两值之差的绝对值。

示例 1：
输入：root = [4,2,6,1,3]
输出：1

示例 2：
输入：root = [1,0,48,null,null,12,49]
输出：1

提示：
树中节点的数目范围是 [2, 10^4]
0 <= Node.val <= 10^5

 */

// * 思路：

// 方法一：小白想的
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
var getMinimumDifference = function(node) {
  const val = node.val;

  if (!node.left && !node.right) {
    return Number.MAX_SAFE_INTEGER;
  }

  if (!node.left && node.right) {
    const right = getMin(node.right);
    return Math.min(right.val - val, getMinimumDifference(node.right));
  }

  if (node.left && !node.right) {
    const left = getMax(node.left);
    return Math.min(val - left.val, getMinimumDifference(node.left));
  }

  const left = getMax(node.left);
  const right = getMin(node.right);

  return Math.min(val - left.val, right.val - val, getMinimumDifference(node.left), getMinimumDifference(node.right));
};

var getMax = (node) => node.right ? getMax(node.right) : node;
var getMin = (node) => node.left ? getMin(node.left) : node;


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');