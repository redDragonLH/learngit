/**
 * 3. 无重复字符的最长子串
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */

/**
 * 最直观的方案，轮询，用对象把轮询到的元素保存起来，轮询时判断是否有相应的元素在对象上，
 * 但是有个问题，在对象上有数据时必须把重复的字符之前的字符全都删掉，比较麻烦，要不要考虑再来个数组保存位置～～
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s)return 0;
    let map = new Map();
    let count = 0;
    let lin = 0;
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i]) && map.get(s[i]) >= i-lin) { // 保存的数据存在并且在当前的字串中则需要更新
            count = Math.max(lin,count) // 这时候更新一下count,要不然等lin计算出来就晚了
            lin = i - map.get(s[i])
        } else {
            lin++; // 不在则当前字串+1
        }
        map.set(s[i],i) // 不论怎么着都得更新
    }
    return Math.max(lin,count);
};

// console.log(lengthOfLongestSubstring('abba'))
console.log(lengthOfLongestSubstring('abcabcbb'))
/**
 * 时间复杂度 O(n) 所有字符循环一次
 * 空间复杂度 O(n) 保存了不重复的字符
 * 
 * 执行用时 :92 ms, 在所有 JavaScript 提交中击败了91.00%的用户
 * 内存消耗 :38 MB, 在所有 JavaScript 提交中击败了75.34%的用户
 */