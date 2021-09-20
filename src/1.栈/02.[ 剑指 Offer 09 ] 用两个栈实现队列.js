/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

 

示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

// * 思路：
// * 队列：先进先出，栈：后进先出
// * 单个栈无法实现先进先出
// * 两个栈可以实现列表倒序（A出栈B入栈）
// * 入队栈&出队栈
// * 入队操作：入队栈push
// * 出队操作：如果出队栈不为空则出队栈pop；否则将入队栈元素依次pop并push到出队栈，若出队栈依然为空，则返回-1，否则返回出队栈pop的结果

var CQueue = function() {
  // 入队栈
  this.enqueueStack = [];

  // 出队栈
  this.dequeueStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  // 入队
  this.enqueueStack.push(value);
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  // 出队
  if (this.dequeueStack.length) {
    return this.dequeueStack.pop();
  }
  while (this.enqueueStack.length) {
    this.dequeueStack.push(this.enqueueStack.pop());
  }
  if (!this.dequeueStack.length) {
    return -1;
  }
  return this.dequeueStack.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');