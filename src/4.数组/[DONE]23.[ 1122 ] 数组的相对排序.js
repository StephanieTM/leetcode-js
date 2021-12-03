/**
 * * 题目名称：数组的相对排序
 * * 题目地址：https://leetcode-cn.com/problems/relative-sort-array

给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

示例：
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]

提示：
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中

 */

// * 思路：

// 自定义排序
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map = new Map();
  
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i);
  }

  const result = [...arr1];
  return result.sort((a, b) => {
    const hasA = map.has(a);
    const hasB = map.has(b);
    if (hasA && hasB) {
      return map.get(a) - map.get(b);
    }
    if (!hasA && !hasB) {
      return a - b;
    }
    if (hasA && !hasB) {
      return -1;
    }
    if (!hasA && hasB) {
      return 1;
    }
  });
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');