/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const n = s.length;
  if (n % 2) {
    return false;
  }

  const pair = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const stack = [];

  for (let char of s) {
    if (pair.has(char)) {
      // 如果读到闭合括号，且栈顶元素不是与其配对的开启括号，则一定无效
      if (pair.get(char) !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
};

// 测试用例
let test = '({)[}]'

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');