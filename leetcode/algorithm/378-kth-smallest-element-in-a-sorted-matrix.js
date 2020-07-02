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

/**
 * 官方 归并排序思路
 * 
 * 由题目给出的性质可知，这个矩阵的每一行均为一个有序数组。问题即转化为从这 nn 个有序数组中找第 kk 大的数，可以想到利用归并排序的做法，归并到第 kk 个数即可停止。
 * 
 * 一般归并排序是两个数组归并，而本题是 nn 个数组归并，所以需要用小根堆维护，以优化时间复杂度。
 */
/**
 * java 代码
 * 
 * 代码步骤：
 * 1. 定义一个小顶堆数据结构，把二维数组中按数组为单位插入小顶堆，定义时注意定义比较逻辑
 * 2. 循环二维数组外层， 把数组的头部元素与当前数组下标插入组成一个新数组插入到小顶堆，这样小顶堆内部保存的就是二维数组内部的第一个元素的第一个元素，与当前元素的下标
 * 3. 
 * 
 * class Solution {
 *      public kthSmallest (int[][] matrix,int k) {
 *          // PriorityQueue 是一种数据结构，通过二叉小顶堆实现，也就是说这是小顶堆数据结构，拿出来的数据永远是最小的
 *          // Comparator 是在集合外部实现的排序 ，这里的代码就是定一个Comparator类然后覆写对比方法
 *          PriorityQueue<int[]> pq = new PriorityQueue<int[]>(new Comparator<int[]>(){
 *              @Override
 *              public int compare(int[] a,int[] b) {
 *                  return a[0] - b[0];
 *              }
 *          });
 *          int n = matrix.length;
 *          for (int i = 0; i < n; i++) {
 *              // offer 插入元素，失败时返回false
 *              pq.offer(new int[]{matrix[i][0], i, 0}); //new int[]{matrix[i][0], i, 0} 为初始化数组 大括号内的数据为初始的数组元素
 *          }
 *          // 这段代码的大致意思就是 删除最小值，然后再从这个删除的最小值的元素的数组内把它后面的元素再加进小顶堆来，但是不一定还会在堆顶
 *          // 有序矩阵～～ n 是二维数组外层的宽高，并且也是内层的宽高
 *          for (int i = 0; i < k - 1; i++) {
 *              // poll 删除队首元素，失败返回null
 *              int[] now = pq.poll();
 *              if (now[2] != n - 1) { // now[2] 在初始时给的是0，肯定与k无关，这个条件 不等于 n-1，就是不等于二维数组的最后一个数组的下标（也是不等于内层元素的长度，减一是因为要操作的是后一个元素，如果当前元素是最后一个，操作的时候就没有元素了）
 *                  // now[2] 还参与了获取二维数组中实际元素位置的获取，那它应该就是代表的当前元素内部数字的下标
 *                  pq.offer(new int[]{matrix[now[1]][now[2] + 1], now[1], now[2] + 1});
 *               }
 *          }
 *       return pq.poll()[0];
 *      }
 * }
 */