/**
 * * 题目名称：回文链表
 * * 题目地址：https://leetcode-cn.com/problems/palindrome-linked-list

给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

示例 1：
输入：head = [1,2,2,1]
输出：true

示例 2：
输入：head = [1,2]
输出：false

 */

// * 思路：

// 方法一：时间复杂度 O(n), 空间复杂度 O(n)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }

  let left = 0, right = vals.length - 1;

  while (left < right) {
    if (vals[left] !== vals[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// 还有一种时间复杂度 O(n), 空间复杂度 O(1) 的方法：
// 快慢指针，慢指针一次 1 步，快指针一次 2 步，快指针结束时慢指针在链表中间
// 快慢指针遍历的同时翻转前半部分链表
// 比较前半部分和后半部分是否相同
// 比较的同时再翻转一次前半部分恢复链表

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');