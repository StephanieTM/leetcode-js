/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

// * 思路：

/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
  this.enqueueStack = [];
  this.dequeueStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.enqueueStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.dequeueStack.length) {
    while (this.enqueueStack.length) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
  }
  return this.dequeueStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.dequeueStack.length) {
    while (this.enqueueStack.length) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
  }
  return this.dequeueStack[this.dequeueStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.dequeueStack.length && !this.enqueueStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');