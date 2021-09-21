/**
 * * 题目名称：最后一个单词的长度
 * * 题目地址：https://leetcode-cn.com/problems/length-of-last-word

给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

 

示例 1：

输入：s = "Hello World"
输出：5
示例 2：

输入：s = "   fly me   to   the moon  "
输出：4
示例 3：

输入：s = "luffy is still joyboy"
输出：6
 

提示：

1 <= s.length <= 104
s 仅有英文字母和空格 ' ' 组成
s 中至少存在一个单词

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/length-of-last-word
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：
// * 反向遍历

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && len) {
      return len;
    }
    if (s[i] !== ' ') {
      len++;
    }
  }
  return len;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');