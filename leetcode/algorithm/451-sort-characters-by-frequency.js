/**
 * 451. 根据字符出现频率排序
 * 
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
 * 
 */
/**
 * 肯定得先计算数量，然后在判断吧
 * 
 * 流水线版~~
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let obj = {}
    for (const i of s) {
        if (obj[i]) obj[i][1]++;
        else obj[i] = [i, 1]
    }
    let tempArr = []
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            tempArr.push(obj[key])

        }
    }
    tempArr.sort((a, b) => b[1] - a[1])
    let str = ''
    for (const item of tempArr) {
        for (let i = 0; i < item[1]; i++) {
            str += item[0]

        }
    }
    return str
};

console.log(frequencySort("tree"));
/**
 * 执行用时：124 ms, 在所有 JavaScript 提交中击败了36.80%的用户
 * 内存消耗：45.4 MB, 在所有 JavaScript 提交中击败了33.66%的用户
 */