/**
 * 341. 扁平化嵌套列表迭代器
 * 
 * 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
 * 列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * 一次返回一个数字么~~嵌套的还得保存当前位置哦
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    // 需要数组保存当前的位置,因为内部可能是嵌套的,所以用一个数无法描述嵌套数据
    this.pos = [0];

    let zeroItem = nestedList[0]
    while (typeof zeroItem === 'object') {
        zeroItem = zeroItem[0];
        this.pos.push(0)
    }
    this.pos.push(0)
    this.nestedList = nestedList;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return !!this.pos.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    let lastPos = 0;
    let item = this.nestedList
    this.pos.forEach(e => {
        item = item[e]
        lastPos = e
    })
    // this.pos[this.pos.length - 1] = lastPos++;
    this.nextPos()
    return item;
};

/**
 * 自己写的获取下个位置的逻辑太复杂了,而且实现也不是很好,
 */
NestedIterator.prototype.nextPos = function () {
    let item = this.nestedList
    if(!this.pos.length) return false;
    this.pos[this.pos.length - 1]++

    this.pos.forEach(e => {
        item = item[e]
    })
    if (!item) {
        this.pos.pop()
        this.pos.length && this.pos[this.pos.length - 1]++
    }
    item = this.nestedList;
    this.pos.forEach(e => {
        item = item[e]
    })
    while(typeof item === 'object') {
        item= item[0];
        this.pos.push(0)
    }
    this.pos.push(0)
}
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/