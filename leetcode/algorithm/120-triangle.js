/**
 * 120. 三角形最小路径和
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 */

/**
 * 想法，从顶部开始递归或者循环，每条线都走一遍，动态规划方案
 * 
 * 如果只考虑用O(n)的话也就是每行只有一个数字，有点蛋疼
 * 就算从后往前计算也没办法每次确定一行吧
 * @param {number[][]} triangle
 * @return {number}
 */
/**
 * 1. dp数组的含义是当前元素从上往下计算的和
 * 2. 状态转移公式 dp[i][j] = Max(dp[i-1][j],dp[i-1][j-1])
 * 3. 初始数值就是 triangle[0][0];
 */
var minimumTotal = function(triangle) {
    let len = triangle.length;
    if(!len) return 0;
    if(len === 1) return triangle[0][0];
    let count = Number.MAX_SAFE_INTEGER;
    let arr = JSON.parse(JSON.stringify(triangle));
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            //可能是 i-1 j 和i-1 j-1的子元素

            // 边界条件,如果自底向上应该可以减少边界条件的判断，但是自底向上就会在插入时进行大小的比较
            let j1 = j=== 0 ? Number.MAX_SAFE_INTEGER:  arr[i-1][j-1];
            let i1 = j=== arr[i-1].length?Number.MAX_SAFE_INTEGER: arr[i-1][j]

            let min = i1 < j1 ? i1 : j1
            arr[i][j]=min+triangle[i][j];
            if(i === len-1)count = Math.min(count,arr[i][j])
        }
    }
    return count;
};
let arr = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]
console.log(minimumTotal(arr));

/**
 * 这逻辑还超过 70%的人～
 * 
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了67.34%的用户
 * 内存消耗：36.5 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */

 /**
  * 其他方案和优化方法：
  * 
  * 自底向上的处理
  * 在原数组中原地修改
  * 
  * 优化：
  * 因为每个dp[i][j]只与 [i-1]行有关系所以可以考虑把[i-1]之前的数据覆盖掉
  * 从 i 到 0 递减地枚举 j，这样我们只需要一个长度为 n 的一维数组 f
  */