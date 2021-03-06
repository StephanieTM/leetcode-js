/**
 * * 题目名称：移动零
 * * 题目地址：https://leetcode-cn.com/problems/move-zeroes

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0, right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right++;
    } else {
      right++; // left停在0
    }
  }
};

// 测试用例
let test = [0, 1, 0, 1]

console.time('执行用时');
moveZeroes(test);
console.log(test);
console.timeEnd('执行用时');