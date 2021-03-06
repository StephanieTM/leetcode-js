/**
 * * 题目名称：递增顺序查找树
 * * 题目地址：https://leetcode-cn.com/problems/increasing-order-search-tree

给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

示例 1：
输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

示例 2：
输入：root = [5,1,7]
输出：[1,null,5,null,7]

提示：
树中节点数的取值范围是 [1, 100]
0 <= Node.val <= 1000

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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  if (!root) return null;

  const head = new TreeNode();
  let curr = head;

  const traverse = (node) => {
    if (node.left) traverse(node.left);

    if (curr) {
      curr.right = node;
      node.left = null;
      curr = curr.right;
    }

    if (node.right) traverse(node.right);
  };

  traverse(root);

  return head.right;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');