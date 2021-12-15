/**
 * * 题目名称：宝石与石头
 * * 题目地址：https://leetcode-cn.com/problems/jewels-and-stones

给你一个字符串 jewels 代表石头中宝石的类型，另有一个字符串 stones 代表你拥有的石头。 stones 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

字母区分大小写，因此 "a" 和 "A" 是不同类型的石头。

示例 1：
输入：jewels = "aA", stones = "aAAbbbb"
输出：3

示例 2：
输入：jewels = "z", stones = "ZZ"
输出：0

提示：
1 <= jewels.length, stones.length <= 50
jewels 和 stones 仅由英文字母组成
jewels 中的所有字符都是 唯一的

 */

// * 思路：

// 方法一：Map
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const map = new Map();
  let result = 0;

  for (const stone of stones) {
    map.set(stone, (map.get(stone) || 0) + 1);
  }

  for (const jewel of jewels) {
    if (map.has(jewel)) {
      result += map.get(jewel);
    }
  }

  return result;
};

// 方法二：字符串
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let result = 0;

  for (const stone of stones) {
    if (jewels.includes(stone)) {
      result++;
    }
  }

  return result;
};

// 方法三：Set
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const set = new Set(jewels);
  let result = 0;

  for (const stone of stones) {
    if (set.has(stone)) {
      result++;
    }
  }

  return result;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');