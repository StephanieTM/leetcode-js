/**
 * * 题目名称：另一个树的子树
 * * 题目地址：https://leetcode-cn.com/problems/subtree-of-another-tree

给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。

二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。

示例 1：
输入：root = [3,4,5,1,2], subRoot = [4,1,2]
输出：true

示例 2：
输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
输出：false

提示：
root 树上的节点数量范围是 [1, 2000]
subRoot 树上的节点数量范围是 [1, 1000]
-10^4 <= root.val <= 10^4
-10^4 <= subRoot.val <= 10^4

 */

// * 思路：

// 先序遍历树（遇到空节点记为null），则子树的节点一定是连续的
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  const listRoot = [], listSubRoot = [];

  traverse(root, listRoot);
  traverse(subRoot, listSubRoot);

  for (let i = 0; i <= listRoot.length - listSubRoot.length; i++) {
    let count = 0;
    while (count < listSubRoot.length && listRoot[i + count] === listSubRoot[count]) {
      count++;
    }
    if (count === listSubRoot.length) {
      return true;
    }
  }

  return false;
};

function traverse(root, list) {
  if (!root) {
    list.push(null);
    return;
  }
  list.push(root.val);
  traverse(root.left, list);
  traverse(root.right, list);
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');