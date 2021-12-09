/**
 * * 题目名称：二叉搜索树中的众数
 * * 题目地址：https://leetcode-cn.com/problems/find-mode-in-binary-search-tree

给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

结点左子树中所含结点的值小于等于当前结点的值
结点右子树中所含结点的值大于等于当前结点的值
左子树和右子树都是二叉搜索树
例如：
给定 BST [1,null,2,2],

   1
    \
     2
    /
   2
返回[2].

提示：如果众数超过1个，不需考虑输出顺序

进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）

 */

// * 思路：

// 中序遍历
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
 * @return {number[]}
 */
var findMode = function(root) {
  let maxCount = 0, count = 0, curr = null;
  let result = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);


    if (curr === node.val) {
      count++;
    } else {
      curr = node.val;
      count = 1;
    }
    if (count === maxCount) {
      result.push(curr);
    } else if (count > maxCount) {
      maxCount = count;
      result = [curr];
    }

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