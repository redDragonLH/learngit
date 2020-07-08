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
    let arr = []
    if(!k) return arr;
    if(shorter === longer) return [shorter*k];
    let count = 0
    while(count <= k) {
        arr.push(longer*count + shorter * (k-count));
        count++;
    }
    return arr;
};
divingBoard(1,2,3)

/**
 * 因为从最短的长板开始计算，所以数字应该天生就是从小到大的
 * 
 * 执行用时：176 ms, 在所有 JavaScript 提交中击败了60.53%的用户
 * 内存消耗：47.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */