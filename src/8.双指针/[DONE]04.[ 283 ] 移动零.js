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

// 方法一：数组存zeroPos
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let curr = 0, zeroPos = [];

  while (curr < nums.length) {
    if (nums[curr] === 0) {
      zeroPos.push(curr);
    } else {
      if (zeroPos.length) {
        nums[zeroPos.shift()] = nums[curr];
        nums[curr] = 0;
        zeroPos.push(curr);
      }
    }
    curr++;
  }
};

// 方法二：双指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroPos = 0, curr = 0;

  while (curr < nums.length) {
    if (nums[curr] !== 0) {
      if (zeroPos !== curr) {
        const temp = nums[zeroPos];
        nums[zeroPos] = nums[curr];
        nums[curr] = temp;
      }
      zeroPos++;
    }
    curr++;
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');