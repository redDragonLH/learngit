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

/**
 * 官方题解： 桶排序
 * 
 * 1. 遍历字符串，统计每个字符出现的频率，同时记录最高频率 maxFreq
 * 2. 创建桶，存储从1到 maxFreq 的每个出现频率额字符
 * 3. 按照出现频率从大到小的顺序遍历桶，对于每个出现的频率，
 * 获得对应的字符，然后将每个字符按照出现频率拼接到排序后的字符串
 */
var frequencySort = function (s) {
    const mp = new Map();
    let maxFreq = 0;
    const length = s.length;
    // 获取当前字符串字符的出现频率（记录）
    for (const ch of s) {
        const frequency = (mp.get(ch) || 0) + 1;
        mp.set(ch, frequency);
        maxFreq = Math.max(maxFreq, frequency);
    }
    // 桶
    const buckets = new Array(maxFreq + 1).fill(0).map(() => new Array());
    // 遍历桶，把对应频率的字符放到相应的桶里
    for (const [ch, num] of mp.entries()) {
        buckets[num].push(ch);
    }
    const ret = [];
    // 轮询每个桶
    for (let i = maxFreq; i > 0; i--) {
        const bucket = buckets[i];
        for (const ch of bucket) {
            for (let k = 0; k < i; k++) {
                // 是不是字符相加比数组push耗时多
                ret.push(ch);
            }
        }
    }
    return ret.join('');
};