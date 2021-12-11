/**
 * * 题目名称：最小高度树
 * * 题目地址：https://leetcode-cn.com/problems/minimum-height-tree-lcci

给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。

示例:
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
          0 
         / \ 
       -3   9 
       /   / 
     -10  5 

 */

// * 思路：

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function construct(left, right) {
    if (left > right) return null;
  
    const middle = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[middle]);
    root.left = construct(left, middle - 1);
    root.right = construct(middle + 1, right);
  
    return root;
  }
  return construct(0, nums.length - 1);
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');