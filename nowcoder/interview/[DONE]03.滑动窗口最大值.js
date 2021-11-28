/**
 * * 题目名称：滑动窗口最大值
 * * 题目地址：https://www.nowcoder.com/questionTerminal/c0a95c1c30e94dc190e6acc42cb06930

有一个只由字符'1'到'9'组成的长度为 nn 的字符串 ss ，现在可以截取其中一段长度为 kk 的子串并且将该子串当作十进制的正整数，如对于子串"123"，其对应的十进制数字就是123123 。

如果想让这个正整数尽可能的大的话，问该正整数最大能是多少。

函数传入一个长度为 nn 的字符串 ss 和一个正整数 kk ，请你返回答案。

示例1
输入
"321",2
输出
32
说明
所有长度为 22 的子串为："32"和"21"，显然3232是最大的。   

示例2
输入
"1234",4
输出
1234
说明
所有长度为 44 的子串只有它自己本身，因此答案为 12341234 。 

 */


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @param k int整型 
 * @return int整型
 */
 function maxValue( s ,  k ) {
  // write code here
  if (k > s.length) {
      return Number(s);
  }
  let maxNum = 0, maxIndex = -1;
  for (let i = 0; i <= s.length - k; i++) {
      if (s[i] > maxNum) {
          maxNum = s[i];
          maxIndex = i;
      } else if (s[i] === maxNum) {
          let replace = false, count = 0;
          while (count < k) {
              count++;
              if (s[i + count] === s[maxIndex + count]) {
                  continue;
              } else if (s[i + count] > s[maxIndex + count]) {
                  replace = true;
                  break;
              } else if (s[i + count] < s[maxIndex + count]) {
                  break;
              }
          }
          if (replace) {
              maxNum = s[i];
              maxIndex = i;
          }
      }
  }
  return Number(s.substr(maxIndex, k));
}

maxValue('2473884163', 4)

module.exports = {
    maxValue : maxValue
};

