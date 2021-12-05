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

提示：
链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9

进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

 */

// * 思路：

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
  if (!head) return false;
  if (!head.next) return true;

  let slow = head, fast = head;
  let prev1 = null;

  while (fast && fast.next) {
    fast = fast.next.next;

    const temp = slow.next;
    slow.next = prev1;
    prev1 = slow;
    slow = temp;
  }

  let prev2 = slow;
  let isPalindrome = true;
  if (fast) {
    slow = slow.next;
  }

  while (prev1) {
    if (slow.val !== prev1.val) {
      isPalindrome = false;
    }
    slow = slow.next;

    const temp = prev1.next;
    prev1.next = prev2;
    prev2 = prev1;
    prev1 = temp;
  }

  return isPalindrome;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');