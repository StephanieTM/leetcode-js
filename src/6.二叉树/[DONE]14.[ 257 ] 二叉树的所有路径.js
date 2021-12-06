/**
 * * 题目名称：二叉树的所有路径
 * * 题目地址：https://leetcode-cn.com/problems/binary-tree-paths

给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

叶子节点 是指没有子节点的节点。
 
示例 1：
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]

示例 2：
输入：root = [1]
输出：["1"]

提示：
树中节点的数目在范围 [1, 100] 内
-100 <= Node.val <= 100

 */

// * 思路：

// 方法一：自己想的广度优先+前缀
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];

  const queue = [], result = [];
  queue.push([root]);
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const nodeList = queue.shift();
      const lastNode = nodeList[nodeList.length - 1];
      if (!lastNode.left && !lastNode.right) {
        result.push(nodeList.map(item => item.val).join('->'));
      }
      if (lastNode.left) queue.push(nodeList.concat(lastNode.left));
      if (lastNode.right) queue.push(nodeList.concat(lastNode.right));
    }
  }

  return result;
};

// 方法二：深度优先
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = [];

  const traverse = (node, path) => {
    if (node) {
      path += String(node.val);
      if (!node.left && !node.right) {
        result.push(path);
      } else {
        path += '->';
        traverse(node.left, path);
        traverse(node.right, path);
      }
    }
  };
  traverse(root, '');

  return result;
};

// 方法三：广度优先
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];

  const result = [];
  const node_queue = [root], path_queue = [String(root.val)];

  while (node_queue.length) {
    const node = node_queue.shift();
    const path = path_queue.shift();

    if (!node.left && !node.right) {
      result.push(path);
    } else {
      if (node.left) {
        node_queue.push(node.left);
        path_queue.push(path + '->' + String(node.left.val));
      }

      if (node.right) {
        node_queue.push(node.right);
        path_queue.push(path + '->' + String(node.right.val));
      }
    }
  }

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');