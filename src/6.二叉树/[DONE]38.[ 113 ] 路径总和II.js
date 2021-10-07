/**
 * * 题目名称：路径总和II
 * * 题目地址：https://leetcode-cn.com/problems/path-sum-ii

给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

 

示例 1：


输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
示例 2：


输入：root = [1,2,3], targetSum = 5
输出：[]
示例 3：

输入：root = [1,2], targetSum = 0
输出：[]
 

提示：

树中节点总数在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const result = [];

  function traversal(node, count, path) {
    // 叶子节点，停止遍历
    if (!node.left && !node.right) {
      // 如果路径和满足条件，则计入result
      if (count === 0) result.push([...path]);
      return;
    }

    if (node.left) {
      path.push(node.left.val);
      traversal(node.left, count - node.left.val, path); // 递归
      path.pop(); // 回溯
    }

    if (node.right) {
      path.push(node.right.val);
      traversal(node.right, count - node.right.val, path); // 递归
      path.pop(); // 回溯
    }
  }

  if (root) {
    traversal(root, targetSum - root.val, [root.val]);
  }

  return result;
};


// ----------------------------------------------------------------------------

// 精简版

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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const result = [], curPath = [];

  function traversal(node, count) {
    curPath.push(node.val);
    count -= node.val;

    if (!node.left && !node.right && count === 0) {
      result.push([...curPath]);
    }

    node.left && traversal(node.left, count);
    node.right && traversal(node.right, count);

    curPath.pop();
  }

  if (root) {
    traversal(root, targetSum);
  }

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');
