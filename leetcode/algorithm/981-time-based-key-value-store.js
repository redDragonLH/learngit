/**
 * 981. 基于时间的键值存储
 * 
 * 创建一个基于时间的键值存储类 TimeMap，它支持下面两个操作：
 * 
 * 1. set(string key, string value, int timestamp)
 *  * 存储键 key、值 value，以及给定的时间戳 timestamp。
 * 
 * 2. get(string key, int timestamp)
 *  * 返回先前调用 set(key, value, timestamp_prev) 所存储的值，其中 timestamp_prev <= timestamp。
 *  * 如果有多个这样的值，则返回对应最大的  timestamp_prev 的那个值。
 *  * 如果没有值，则返回空字符串（""）。
 */

/**
 * 数据结构选的好，事就少不少
 */
var TimeMap = function () {
    this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map.has(key)) {
        this.map.get(key).push([value, timestamp]);
    } else {
        this.map.set(key, [[value, timestamp]]);
    }
};

TimeMap.prototype.get = function (key, timestamp) {
    // 也就这里复杂一点，需要二分
    let pairs = this.map.get(key)
    if (pairs) {
        let low = 0, high = pairs.length - 1;
        while (low <= high) {
            let mid = Math.floor((high - low) / 2) + low;
            if (pairs[mid][1] > timestamp) {
                high = mid - 1;
            } else if (pairs[mid][1] < timestamp) {
                low = mid + 1;
            } else {
                return pairs[mid][0];
            }
        }
        if (high >= 0) {
            return pairs[high][0];
        }
        return "";
    }
    return "";
};
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */