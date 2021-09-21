/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof

给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

 

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
示例 2：

输入：nums = [1], k = 1
输出：[1]
示例 3：

输入：nums = [1,-1], k = 1
输出：[1,-1]
示例 4：

输入：nums = [9,11], k = 2
输出：[11]
示例 5：

输入：nums = [4,-2], k = 2
输出：[4]
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sliding-window-maximum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // 优先队列，队首元素最大，且队列中只有当前窗口包含的元素

  // 存放优先队列的元素下标
  const decreasingDqueue = [];

  // 存放结果
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // 如果队列不为空且当前元素大于队尾元素，则弹出
    // 用来保证队列是单调递减的
    while (decreasingDqueue.length && nums[i] >= nums[decreasingDqueue[decreasingDqueue.length - 1]]) {
      decreasingDqueue.pop();
    }

    // 当前元素下标入栈
    decreasingDqueue.push(i);

    // 如果当前最大值（队首元素）不在窗口中，则出队
    while (decreasingDqueue[0] <= i - k) {
      decreasingDqueue.shift();
    }

    // 达到窗口大小时，将当前最大值（队首元素）推入结果列表
    if (i >= k - 1) {
      result.push(nums[decreasingDqueue[0]]);
    }
  }

  return result;
};

// 测试用例

console.time('执行用时');
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.timeEnd('执行用时');