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
  let i = 0, count = 0, distance = 0;

  const moveToRight = (from, _count, _dist) => {
    let i = 0;
    while (_dist > 0) {
      nums[from + i] = nums[from + i + _count];
      i++;
      _dist--;
    }
    while (_count > 0) {
      nums[from + i] = 0;
      i++;
      _count--;
    }
  };

  while (i < nums.length) {
    while (nums[i] === 0) {
      count++;
      i++;
    }
    while (i < nums.length && nums[i] !== 0) {
      distance++;
      i++;
    }
    moveToRight(i - distance - count, count, distance);
    // i = i - count;
    count = 0;
    distance = 0;
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');