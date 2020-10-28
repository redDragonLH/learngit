/**
 * 1207. 独一无二的出现次数
 * 
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    if(!arr.length) return true;
    arr.sort((a,b)=> a-b);
    const result = new Set();
    let count = 1
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i-1]) {
            count++;
        }else {
            if(result.has(count)) return false;
            result.add(count);
            count = 1;
        }
    }
    return true;
};
/**
 * 先排序后计算
 * 
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了60.00%的用户
 * 内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了41.93%的用户
 */

/**
 * 第三方最优题解
 * 也是官方题解思路
 * 
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {};

    for (let num of arr) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    let times = {};

    for (let key in map) {
        if (times[map[key]]) return false;

        times[map[key]] = true;
    }

    return true;
};