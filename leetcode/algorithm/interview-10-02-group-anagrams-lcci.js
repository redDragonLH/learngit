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
    let resultObj = new Map();
    strs.forEach(e => {
        let sortStr = e.split('').sort().join('');
        if (resultObj.has(sortStr)) {
            resultObj.set(sortStr, [...resultObj.get(sortStr), e])
        } else {
            resultObj.set(sortStr, [e])
        }
    })
    let a = []
    for (let [key, value] of resultObj) {
        a.push(value)
    }
    return a
};
/**
 * 思路正确，但是这个方案应该还有可以优化的点
 * 执行用时：140 ms, 在所有 JavaScript 提交中击败了82.35%的用户
 * 内存消耗：47.4 MB, 在所有 JavaScript 提交中击败了92.16%的用户
 */