/**
 * * 题目名称：对称二叉树
 * * 题目地址：https://leetcode-cn.com/problems/symmetric-tree

给定一个二叉树，检查它是否是镜像对称的。

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


// 方法1: 自己想的迭代法，数据量大会超时
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const temp = [];
  temp.push(root ? root.left : null);
  temp.push(root ? root.right : null);

  while (temp.indexOf(item => item !== null) > -1) {
    console.log('temp :>> ', temp);
    const length = temp.length;
    for (let i = 0; i < length / 2; i++) {
      if ((temp[i] && temp[i].val) !== (temp[length - i - 1] && temp[length - i - 1].val)) {
        return false;
      }
    }
    for (let i = 0; i < length; i++) {
      const node = temp.shift();
      temp.push(node ? node.left : null);
      temp.push(node ? node.right : null);
    }
  }
  return true;
};

// 方法2: 递归
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return check(root.left, root.right);
};

function check (node1, node2) {
  if (!node1 && !node2) return true; // 都是 null
  if (!node1 || !node2) return false; // 只有一个是 null
  return (node1.val === node2.val) && check2(node1.left, node2.right) && check2(node1.right, node2.left); // 都不是 null
}

// 方法3: 迭代
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root || (!root.left && !root.right)) return true;

  const list = [root.left, root.right];
  while (list.length) {
    const left = list.shift();
    const right = list.shift();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    
    list.push(left.left, right.right, left.right, right.left);
  }
  return true;
};

// 复习
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;

  return check(root.left, root.right);
};

function check(left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val !== right.val) return false;
  return check(left.left, right.right) && check(left.right, right.left);
}

// 测试用例

let test = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: 3,
  },
  right: {
    val: 2,
    left: null,
    right: 3,
  },
}

console.time('执行用时');
console.log(isSymmetric(test));
console.timeEnd('执行用时');