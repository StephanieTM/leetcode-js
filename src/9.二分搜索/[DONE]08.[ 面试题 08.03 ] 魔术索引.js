/**
 * * 题目名称：魔术索引
 * * 题目地址：https://leetcode-cn.com/problems/magic-index-lcci

魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，如果没有，则返回-1。若有多个魔术索引，返回索引值最小的一个。

示例1:

 输入：nums = [0, 2, 3, 4, 5]
 输出：0
 说明: 0下标的元素为0
示例2:

 输入：nums = [1, 1, 1]
 输出：1
说明:

nums长度在[1, 1000000]之间
此题为原书中的 Follow-up，即数组中可能包含重复元素的版本


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/magic-index-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMagicIndex = function(nums) {
  let i = 0;
  while (i < nums.length) {
    if (i === nums[i]) {
      return i;
    } else if (i < nums[i]) {
      i = nums[i];
    } else {
      i++;
    }
  }
  return -1;
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');