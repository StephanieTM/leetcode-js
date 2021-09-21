/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 */

// * 思路：

/**
 * Initialize your data structure here.
 */
 var MyStack = function() {
  this.pushQueue = []; // 主队列
  this.helpQueue = []; // 辅助队列
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  while (this.pushQueue.length) {
    this.helpQueue.push(this.pushQueue.shift());
  }
  this.pushQueue.push(x);
  while (this.helpQueue.length) {
    this.pushQueue.push(this.helpQueue.shift());
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.pushQueue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.pushQueue[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.pushQueue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// ---------------------------------------------------------------

/**
 * Initialize your data structure here.
 */
 var MyStack2 = function() {
  this.pushQueue = []; // 主队列
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack2.prototype.push = function(x) {
  this.pushQueue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack2.prototype.pop = function() {
  for (let i = 0; i < this.pushQueue.length - 1; i++) {
    this.pushQueue.push(this.pushQueue.shift());
  }
  return this.pushQueue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack2.prototype.top = function() {
  return this.pushQueue[this.pushQueue.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack2.prototype.empty = function() {
  return !this.pushQueue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');