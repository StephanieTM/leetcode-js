/**
 * * 题目名称：三数之和
 * * 题目地址：https://leetcode-cn.com/problems/3sum/

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 

提示：

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length < 3) {
    return [];
  }

  const result = [];
  nums.sort((a, b) => a-b); // 数组排序

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break; // 已排序数组中当前数大于0，那么它之后不可能存在2个数与它的和为0
    if (i > 0 && nums[i - 1] === nums[i]) continue; //与前一个i相同，那么会有重复解，跳过
    let L = i + 1, R = nums.length - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L+1]) L++; // 去重
        while (L < R && nums[R] === nums[R-1]) R--; // 去重
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else {
        R--;
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