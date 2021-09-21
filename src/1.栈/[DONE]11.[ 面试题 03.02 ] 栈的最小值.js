/**
 * * 题目名称：栈的最小值
 * * 题目地址：https://leetcode-cn.com/problems/min-stack-lcci

请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。


示例：

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：
// * O(n)时间找出最小值，使用辅助栈
// * 辅助栈初始存放无穷大
// * 有数入栈时，比较辅助栈与当前数，将较小值推入辅助栈
// * 有数出栈时，辅助栈也出栈
// * 辅助栈栈顶即为当前栈中最小值

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.dataStack = [];

  // 存储每个元素入栈时的最小值
  this.minStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.dataStack.push(x);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.dataStack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.dataStack[this.dataStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');