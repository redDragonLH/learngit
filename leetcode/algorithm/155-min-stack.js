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