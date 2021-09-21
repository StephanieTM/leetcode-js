/**
 * * 题目名称：只出现一次的数字
 * * 题目地址：https://leetcode-cn.com/problems/single-number

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber1 = function(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else {
      map.set(nums[i], i);
    }
  }
  return Array.from(map)[0][0];
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber2 = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    // 异或运算
    /*
    任何数和 0 做异或运算，结果仍然是原来的数，即 a⊕0=a。
    任何数和其自身做异或运算，结果是 0，即 a⊕a=0。
    异或运算满足交换律和结合律，即 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。
    */
    result ^= nums[i];
  }
  return result;
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');