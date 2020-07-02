/**
 * 378. 有序矩阵中第K小的元素
 * 
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
 * 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
 */

/**
 * 思路：归并排序
 * 
 * 把矩阵分成多个数组，然后每个数组一个指针，然后比对元素大小就行排序
 * 
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    if(!matrix.length) return 0;
    let pointer = new Array(matrix.length).fill(0);

    let pos = 0;
    let ele = 0;
    while(pos < k) {
        let m = 0;
        ele = Number.MAX_SAFE_INTEGER;
        pointer.forEach((e,i) => {
            let current = matrix[i][pointer[i]]
            if(ele > current){
                ele = current;
                m = i;
            }
        });
        pointer[m] = ++pointer[m];
        pos++;
    };
    
    return ele;
};
matrix = [
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
 ],
 k = 8,
console.log(kthSmallest(matrix,k));

/**
 *  速度感人，但是不太清晰优化的点
 *  此逻辑优化前景不大，思路应该是有问题
 * 
 * 执行用时：256 ms, 在所有 JavaScript 提交中击败了5.07%的用户
 * 内存消耗：43.6 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */