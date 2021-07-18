/**
 * 面试题 10.02. 变位词组
 * 
 * 编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。
 * 
 * 注意：本题相对原题稍作修改
 */

/**
 * 核心问题是确认元素组成
 * 
 * 切分然后排序应该能解决，但是速率就有点感人了吧
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let resultObj = {};
    strs.forEach(e => {
        let sortStr = e.split('').sort().join('');
        if (resultObj[sortStr]) {
            resultObj[sortStr].push(e)
        } else {
            resultObj[sortStr] = [e];
        }

    })
    return Object.values(resultObj)
};
/**
 * 优化逻辑之后可以提高 14% 的时间
 * 执行用时：120 ms, 在所有 JavaScript 提交中击败了98.04%的用户
 * 内存消耗：48.4 MB, 在所有 JavaScript 提交中击败了52.94%的用户
 */

/**
 * 官方题解 计数哈希
 */
var groupAnagrams = function (strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        // 就是把字符串分割重排后的值改为计数作为对象的键，没想到，数组也能做key
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(s) : map[count] = [s];
    }
    console.log(map)
    return Object.values(map);
};