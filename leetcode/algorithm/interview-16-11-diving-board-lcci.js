/**
 * 面试题 16.11. 跳水板
 * 
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 * 返回的长度需要从小到大排列。
 */

/**
 * 如果还是用折半查找，分为两个数组，最后合并一下的方案呢
 * 
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    let arrB = [];
    let arrAfter = [];
    if(!k) return arrB;
    if(shorter === longer) return [shorter*k];
    let start = 0;
    let end = k;
    let count = parseInt(k/2);
    while(end >= count) {
        arrB.push(longer*start + shorter * end);
        arrAfter.unshift(shorter * start + longer * end)
        end--;
        start++;
    }
    
    return Array.from(new Set(arrB.concat(arrAfter)));
};
console.log(divingBoard(1,2,3))


/**
 * 数据转换花了太多时间
 * 
 * 执行用时：320 ms, 在所有 JavaScript 提交中击败了17.10%的用户
 * 内存消耗：47.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

 /**
  * java 代码
  * 
  class Solution {
    public int[] divingBoard(int shorter, int longer, int k) {
        if(k == 0) return new int[0];
        if(shorter == longer) return new int[]{shorter*k};
        int[] arr = new int[k+1]; // 因此创建长度为 k+1 的数组 lengths，对于 0 ≤ i ≤ k，令 lengths[i] = shorter * (k-i) + longer * i ，则 lengths 包含跳水板所有可能的长度，
        for(int i = 0; i<=k;i++) {
            arr[i] = longer * i + shorter * (k-i);
        }
        return arr;
    }
}
  */