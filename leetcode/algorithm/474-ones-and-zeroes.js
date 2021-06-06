/**
 * 474. 一和零
 * 
 * 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
 * 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。
 * 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
 */

/**
 * 这个逻辑也挺直白的把，双层循环，循环所有字符
 * NM,,,是多个字符串加起來有m个0，n个 1
 * 
 * 错误代码
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let strsLen = strs.length;
    if (!strsLen || (m === 0 && n === 0)) return 0;
    let count = 0;
    for (let i = 0; i < strs.strsLen; i++) {
        let element = strs[i];
        let len = element.length;
        let count01 = [0, 0]; // m,n
        for (let j = 0; j < len; j++) {
            if (element[j] === '0') {
                count01[0]++;
            } else {
                count01[1]++;
            }
        }
        if (count01[0] <= m && count01[1] <= n) {
            count++;
        }
    }
    return count;
};