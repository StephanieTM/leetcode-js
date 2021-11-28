/**
 * * 题目名称：实现二叉树先序，中序和后序遍历
 * * 题目地址：https://www.nowcoder.com/practice/a9fec6c46a684ad5a3abd4e365a9d362

描述
给定一棵二叉树，分别按照二叉树先序，中序和后序打印所有的节点。

示例1
输入：
{1,2,3}
返回值：
[[1,2,3],[2,1,3],[2,3,1]]

示例2
输入：
{}
返回值：
[[],[],[]]

 */

/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
 function threeOrders( root ) {
  // write code here
  const pre = [], mid = [], after = [];
  traverse('pre', root, (node) => {
      if (node !== null) {
          pre.push(node.val);
      }
  });
  traverse('mid', root, (node) => {
      if (node !== null) {
          mid.push(node.val);
      }
  });
  traverse('after', root, (node) => {
      if (node !== null) {
          after.push(node.val);
      }
  });
  
  return [pre, mid, after];
}

function traverse(order, root, callback) {
  if (root === null) {
      callback(null);
      return;
  }
  if (order === 'pre') {
      callback(root);
  }
  traverse(order, root.left, callback);
  if (order === 'mid') {
      callback(root);
  }
  traverse(order, root.right, callback);
  if (order === 'after') {
      callback(root);
  }
}

module.exports = {
  threeOrders : threeOrders
};
