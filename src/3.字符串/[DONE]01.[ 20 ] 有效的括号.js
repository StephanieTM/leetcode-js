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
    // 字符串长度不为偶数，肯定无效
    return false;
  }

  const stack = [];
  const pair = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  for (let i = 0; i < n; i++) {
    if (pair.has(s[i])) {
      // 如果读到闭合括号，但和栈顶的起始括号不匹配，则一定无效
      if (stack[stack.length - 1] !== pair.get(s[i])) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');