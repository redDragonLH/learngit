/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    return parseFloat(x).toString() !== "NaN" && !!this.data.unshift(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.data.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = NaN;
    this.data.map(e => {
        Number.isNaN(min) && (min = e);
        if(min > e) min = e
    })
    return min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 /**
  * 题解思路： 同步辅助栈
  * 
  * 创建一个辅助栈，在数据栈插入数据时与辅助栈栈顶的元素判断大小，比现有的栈顶元素小则同时插入辅助栈，如果现有栈顶元素小则把现有栈顶元素再次插入辅助栈
  * 
  * 这样辅助栈和数据栈的数据量永远同步，但是放置的是当前元素中最小的元素，
  * 
  * 这样会造成辅助栈有些数据冗余
  */

  /**
   * 题解思路：异步辅助栈
   * 
   * 依旧是使用辅助栈，但是如果数据栈插入的元素比辅助栈顶的元素大，则不插入，小于或者等于则插入，这样在出栈时如果数据栈出栈的是和辅助栈顶数据相等则同步推出栈顶元素
   * 
   * 这样减少了很多数据冗余，但是增加了些许复杂度
   */