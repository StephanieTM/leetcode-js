/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof

给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const result = [];
  const queue = []; // 优先级队列，单调递减，队首元素最大，队列内仅包含当前滑动窗口中的元素；queue存放的是下标

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      // 当前数字大于队尾元素，则队尾元素出队（肯定不是滑动窗口的最大值）
      queue.pop();
    }

    queue.push(i);

    while (queue[0] < i - k + 1) {
      // 当队首元素（当前最大的数）对应的下标已经不在滑动窗口中时，队首元素出队
      queue.shift();
    }

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');