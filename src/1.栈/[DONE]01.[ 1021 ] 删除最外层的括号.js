/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 * 
有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。

例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

 

示例 1：

输入：s = "(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
示例 2：

输入：s = "(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
示例 3：

输入：s = "()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。
 

提示：

1 <= s.length <= 105
s[i] 为 '(' 或 ')'
s 是一个有效括号字符串

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-outermost-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// * 思路：从头到尾寻找有效括号组合，push 到结果集中
/**
 * @param {string} S
 * @return {string}
 */
// var removeOuterParentheses = function (S) {
//   const bracket = { '(': ')' }
//   const stack = []
//   let res = []
//   const result = []
//   for (let i = 0; i < S.length; i++) {
//     const val = S[i]
//     if (bracket[val]) { // 左括号
//       stack.push(val)
//     } else { // 右括号
//       stack.pop()
//     }
//     if (stack.length === 0) {
//       // 存在一组有效括号
//       res.push(val)
//       const cur = [...res]
//       cur.shift()
//       cur.pop()
//       result.push(cur)
//       res = []
//       continue
//     }
//     res.push(val)
//   }
//   return result.flat().join('')
// };


/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses1 = function (s) {
  let level = 0;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    // if (s[i] === '(') {
    //   level++;
    //   if (level > 1) {
    //     result += s[i];
    //   }
    // } else {
    //   if (level > 1) {
    //     result += s[i];
    //   }
    //   level--;
    // }

    // 遇到左括号，当前计数值大于 0 ，则属于有效的左括号
    // 遇到右括号，当前计数值大于 1 ，则属于有效的右括号
    if (s[i] === '(' && level++ > 0) result += '(';
    if (s[i] === ')' && level-- > 1) result += ')';
  }
  return result;
}


// 测试用例
let test = "(()())(())(()(()))"

console.time('执行用时');
console.log(removeOuterParentheses1(test));
console.timeEnd('执行用时');
