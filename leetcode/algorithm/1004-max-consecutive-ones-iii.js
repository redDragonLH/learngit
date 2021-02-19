/**
 * 1004. 最大连续1的个数 III
 * 
 * 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
 * 返回仅包含 1 的最长（连续）子数组的长度。
 */

/**
 * 这种要改几个数据的判断,如果一个一个坑的填会不会有没连在一起的坑~~~
 * 
 * 先按照连在一起的逻辑试试
 * 还得记录位置么
 * 
 * 失败------
 * 整理思绪,用以对比正确算法逻辑
 * 
 * 预设逻辑: 需置1的位置肯定是相连的,至少间隔内肯定都是1
 * 所以应该按照顺序依次把0转换为1,如果超出数量则从尾部去掉一个,然后判断现在位置到尾部的长度,到尾部的长度内包括原始1和转换的1
 * 
 * 遇到的问题: 在开头是0的时候无法正确处理,以及可转换数为0时有问题
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let tran = [];
    let end = 0;
    let max = 0;
    for (let i = 1; i < A.length; i++) {
        if(!A[i]) {
            tran.push(i)
            if(tran.length > K) {
                tran.shift();
            }
        }
        end = getEnd(i,A,tran);
        // end 等于0 时 计算会出问题,i是从0开始计算
        !end && (end = -1)
        max = Math.max(max,i-end)
    }
    return max
};
const getEnd = (pos,arr,tran)=> {
    for (let i = pos; i >= 0; i--) {
        if(!(arr[i] || tran.find(e=>e==i))){
            return i;
        }
    }
    return 0;
}