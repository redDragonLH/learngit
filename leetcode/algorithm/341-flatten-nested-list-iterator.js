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

  let zeroItem = nestedList[0];
  while (typeof zeroItem === "object") {
    zeroItem = zeroItem[0];
    this.pos.push(0);
  }
  this.pos.push(0);
  this.nestedList = nestedList;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return !!this.pos.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  let lastPos = 0;
  let item = this.nestedList;
  this.pos.forEach((e) => {
    item = item[e];
    lastPos = e;
  });
  // this.pos[this.pos.length - 1] = lastPos++;
  this.nextPos();
  return item;
};

/**
 * 自己写的获取下个位置的逻辑太复杂了,而且实现也不是很好,
 */
NestedIterator.prototype.nextPos = function () {
  let item = this.nestedList;
  if (!this.pos.length) return false;
  this.pos[this.pos.length - 1]++;

  this.pos.forEach((e) => {
    item = item[e];
  });
  if (!item) {
    this.pos.pop();
    this.pos.length && this.pos[this.pos.length - 1]++;
  }
  item = this.nestedList;
  this.pos.forEach((e) => {
    item = item[e];
  });
  while (typeof item === "object") {
    item = item[0];
    this.pos.push(0);
  }
  this.pos.push(0);
};
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

/**
 * 其实可以进行预处理,先扁平化,然后再用一个位置指针记录位置
 *
 * 数据并不是嵌套数组,而是没有length 的数据,所以预处理有点坑,必须使用已经定义的接口
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [];
    this.pos = 0;
    for (let i = 0; i < nestedList.length; i++) {
      if (nestedList[i].isInteger()) {
        this.stack.push(nestedList[i].getInteger());
      } else {
        this.add(nestedList[i].getList());
      }
    }
  };
  /**
   * @this NestedIterator
   * @returns {boolean}
   */
  NestedIterator.prototype.add = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isInteger()) {
        this.stack.push(arr[i].getInteger());
      } else {
        this.add(arr[i].getList());
      }
    }
  };
  
  /**
   * @this NestedIterator
   * @returns {boolean}
   */
  NestedIterator.prototype.hasNext = function () {
    return this.pos < this.stack.length;
  };
  
  /**
   * @this NestedIterator
   * @returns {integer}
   */
  NestedIterator.prototype.next = function () {
    return this.stack[this.pos++];
  };

/**
 * 执行用时：124 ms, 在所有 JavaScript 提交中击败了37.44%的用户
 * 内存消耗：48.7 MB, 在所有 JavaScript 提交中击败了33.65%的用户
 */

/**
 * 官方题解
 */
var NestedIterator = function (nestedList) {
  this.stack = nestedList;
};

NestedIterator.prototype.hasNext = function () {
  while (this.stack.length !== 0) {
    if (this.stack[0].isInteger()) {
      return true;
    } else {
      let cur = this.stack[0].getList();
      this.stack.shift();
      this.stack.unshift(...cur);
    }
  }
};

NestedIterator.prototype.next = function () {
  return this.stack.shift().getInteger();
};
