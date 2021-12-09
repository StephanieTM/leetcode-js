/**
 * * 题目名称：二叉搜索树的范围和
 * * 题目地址：https://leetcode-cn.com/problems/range-sum-of-bst

给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

示例 1：
输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32

示例 2：
输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23

提示：
树中节点数目在范围 [1, 2 * 104] 内
1 <= Node.val <= 105
1 <= low <= high <= 105
所有 Node.val 互不相同

 */

// * 思路：

// 方法一：闭包递归
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let result = 0;

  const traverse = (node) => {
    if (node.left) traverse(node.left);

    if (node.val >= low && node.val <= high) {
      result += node.val;
    }

    if (node.right) traverse(node.right);
  };

  traverse(root);
  return result;
};


// 方法二：递归深度优先
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  if (!root) return 0;

  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }

  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }

  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};


// 方法三：广度优先
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let result = 0;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;

    if (node.val > high) queue.push(node.left);
    else if (node.val < low) queue.push(node.right);
    else {
      result += node.val;
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');