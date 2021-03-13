/**
 * 705. 设计哈希集合
 * 
 * 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
 * 实现 MyHashSet 类：
 * void add(key) 向哈希集合中插入值 key 。
 * bool contains(key) 返回哈希集合中是否存在这个值 key 。
 * void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 */

/**
 * 这个玩意~~不用 hash表那就只能用数组了呗~~~
 * Initialize your data structure here.
 */
var MyHashSet = function() {

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {

};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {

};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {

};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


/**
 * 链表法
 */
var MyHashSet = function() {
    this.BASE = 769;
    this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashSet.prototype.add = function(key) {
    const h = this.hash(key);
    for (const element of this.data[h]) {
        if (element === key) {
            return;
        }
    }
    this.data[h].push(key);
};

MyHashSet.prototype.remove = function(key) {
    const h = this.hash(key);
    const it = this.data[h];
    for (let i = 0; i < it.length; ++i) {
        if (it[i] === key) {
            it.splice(i, 1);
            return;
        }
    }
};

MyHashSet.prototype.contains = function(key) {
    const h = this.hash(key);
    for (const element of this.data[h]) {
        if (element === key) {
            return true;
        }
    }
    return false;
};

MyHashSet.prototype.hash = function(key) {
    return key % this.BASE;
}