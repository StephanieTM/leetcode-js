/**
 * * 题目名称：稀疏数组搜索
 * * 题目地址：https://leetcode-cn.com/problems/sparse-array-search-lcci

稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。

示例1:

 输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 输出：-1
 说明: 不存在返回-1。
示例2:

 输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 输出：4
提示:

words的长度在[1, 1000000]之间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sparse-array-search-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
  let left = 0, right = words.length - 1;
  while (left <= right) {
    let mid = Math.floor((right-left)/2)+left;
    while (mid > left && words[mid]==='') {
      mid--;
    }
    if (words[mid] === s) {
      return mid;
    } else if (words[mid] > s) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');