/**
 * 面试题 16.11. 跳水板
 * 
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 * 返回的长度需要从小到大排列。
 */

/**
 * 先算出单独的由一种木板构成的跳水板的长度，然后循环每个短的减一，长的 +1，反过来再来一遍
 * 
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if(!k) return [];
    if(shorter === longer) return [shorter*k];
    let shortLen =0;
    let longLen = k;
    let arr = new Set()
    let end = parseInt(k/2);
    while(longLen >= end) {
        arr.add(shorter*shortLen + longer * longLen);
        arr.add(shorter*longLen + longer * shortLen)
        longLen--;
        shortLen++
    }
    arr = Array.from(arr).sort((a,b)=> {
        return a-b;
    })
    return arr;
};
divingBoard(1,2,3)

/**
 * 速度折半还这么慢，其他的是怎么做的
 * 
 * 执行用时：224 ms, 在所有 JavaScript 提交中击败了26.32%的用户
 * 内存消耗：49.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */