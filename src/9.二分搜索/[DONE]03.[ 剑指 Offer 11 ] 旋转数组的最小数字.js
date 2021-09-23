/**
 * * 题目名称：旋转数组的最小数字
 * * 题目地址：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0
注意：本题与主站 154 题相同：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

// 时间复杂度O(n)

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray1 = function(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      return numbers[i];
    }
  }
  return numbers[0];
};


// ----------------------------------------------------------------------------

// 二分法，时间复杂度O(logn)

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(numbers) {
  let i = 0, j = numbers.length - 1, mid;

  while (i < j) {
    mid = Math.floor((i + j) / 2);
    if (numbers[j] > numbers[mid]) {
      j = mid;
    } else if (numbers[j] < numbers[mid]) {
      i = mid + 1;
    } else {
      j--;
    }
  }
  return numbers[i];
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');