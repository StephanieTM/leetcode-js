/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string

给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

 

示例：

输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 

提示：

1 <= S.length <= 20000
S 仅由小写英文字母组成。

 */

// * 思路：
// * 用一个栈就可以
// * 如果当前字符跟栈顶元素相同，则出栈，否则当前字符入栈
// * 如 'abbaca' ，遇到第二个b会直接将b出栈，再遇到第二个a，这时候栈顶已经是a了，继续出栈，最后留下ca

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

// 测试用例
let test = 'abbaca'

console.time('执行用时');
console.log(removeDuplicates(test));
console.timeEnd('执行用时');