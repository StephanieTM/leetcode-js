/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare

给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。

如果相等，返回 true ；否则，返回 false 。

注意：如果对空文本输入退格字符，文本继续为空。 

示例 1：
输入：s = "ab#c", t = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。

示例 2：
输入：s = "ab##", t = "c#d#"
输出：true
解释：s 和 t 都会变成 “”。

示例 3：
输入：s = "a##c", t = "#a#c"
输出：true
解释：s 和 t 都会变成 “c”。

示例 4：
输入：s = "a#c", t = "b"
输出：false
解释：s 会变成 “c”，但 t 仍然是 “b”。

提示：
1 <= s.length, t.length <= 200
s 和 t 只含有小写字母以及字符 '#'

进阶：
你可以用 O(N) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？

 */

// * 思路：

// 为了保证 O(1) 的空间复杂度，考虑用指针
// 由于可以连续删除，所以从后向前对比
// 遇到 # 时分别累计两个字符串的待删除个数
// 遇到正常字符时如果某字符串的待删除个数大于零，则不对比，直接删除
// 遇到正常字符时如果两个字符串的待删除个数都为零，则对比：
//    - 如果两个字符不同，说明最终字符串一定不同，直接返回 false
//    - 如果两个字符相同，则指针分别左移，继续对比下一个字符
// 当两个指针都走完整个字符串时，对比结束，若仍未发现不同的有效字符，则返回 true
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let i = s.length - 1, j = t.length - 1;
  let deleteCounti = 0, deleteCountj = 0;

  // 只要有一个指针还没归零就继续对比
  while (i >= 0 || j >= 0) {
    if (s[i] === '#') {
      // 遇到 # ，待删除个数 +1 ，指针左移
      deleteCounti++;
      i--;
    } else if (deleteCounti > 0) {
      // 遇到正常字符，如果待删除个数 > 0 ，则“删除”，指针左移
      deleteCounti--;
      i--;
    }

    if (t[j] === '#') {
      // 遇到 # ，待删除个数 +1 ，指针左移
      deleteCountj++;
      j--;
    } else if (deleteCountj > 0) {
      // 遇到正常字符，如果待删除个数 > 0 ，则“删除”，指针左移
      deleteCountj--;
      j--;
    }

    // 两个指针都遇到正常字符且待删除个数都为零
    if (!deleteCounti && !deleteCountj && s[i] !== '#' && t[j] !== '#') {
      if (s[i] !== t[j]) {
        // 字符不同，则字符串最终结果不同
        return false;
      } else {
        // 字符相同，指针左移，继续对比前一个字符
        i--;
        j--;
      }
    }
  }

  return true;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');