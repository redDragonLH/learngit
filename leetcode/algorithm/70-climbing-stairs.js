/**
 * 70. 爬楼梯
 * 
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 */

 /**
  * 暴力递归法
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
let fun = (now,n) => {
 if(now > n) {
  return 0
 }
 if( i == n) {
  return 1;
 }
 return fun(now + 1,n ) + fun (now + 2,n)
} 
return fun(0,n)
};
// console.log(climbStairs(3));

/**
 * 解法 2 记忆化递归
 * 
 * 把每一步的结果存储在数组之中，每当函数再次被调用，直接从数组返回结果
 */

var climbStairsBymemo = function(n) {
 let memo = [];
 const fun = (n,now = 0) => {
  
   if(now > n ){
    return 0;
   }
   if(now == n) {
    return 1;
   }
   if(memo[now] > 0) {
    console.log(now,memo[now]);
    
    return memo[now]
   }
   memo[now] = fun(n,now + 1) + fun(n, now + 2);
   return memo[now]; 
 }
 return fun(n)
}

// console.log(climbStairsBymemo(3));

/** 解法3 动态规划
 * 
 * 这个问题可以被分解为一些包含最优子结构的子问题，即它的最优解可以从此其子问题的最优解来有效地构建，我们可以使用动态规划来解决这一问题
 * 
 * 第 i 阶可以由以下两种方法得到
 *  1. 在第(i - 1)阶后向上爬一阶
 *  2. 在第(i -2)阶后向上爬 2 阶
 *  
 * 因为爬到n-1楼后，再爬1楼就能到达n楼
 * 爬到n-2楼同理
 *   因此只需初始化爬到1楼和爬到2楼分别有多少种方法，便可以推导出爬到n楼的方法
 * 
 * 所以到达第 i 阶的方法总数就是第（i-1）阶和第（i-2）阶的方法数之和
 * 
 * 令 dp[i] 表示能到达第 i 阶的方法总数: dp[i] = dp[i-1] + dp[i-2]
 * 
 */
var climbStairsBydp= function(n) {
 if( n == 1) return 1;

 let dp = [0,1,2];
 for (let i = 3; i <= n; i++) {
   dp[i] = dp[i-1] + dp[i-2];  
 }
 return dp[n];
}

console.log(climbStairsBydp(3));

/**
 * 解法 4 斐波那契数
 * 
 * 由观察解法三可知 此计算逻辑就是斐波那契数计算方法
 * 
 * 可由解法三 代码转换为 斐波那契数 计算逻辑
 * 
 * Fib(n) = Fib(n - 1) + Fib(n - 2)
 */

 /**
  * java 代码
  * 
  * public class Solution {
  *   public int climbStairs(int n) {
  *     if (n == 1) {
  *       retutn 1;
  *     }
  *     int first = 1;
  *     for (int i = 3;i <= n; i++) {
  *       int third = first + second;
  *       first = second;
  *       second = third;
  *     }
  *     return second;
  *   }
  * }
  */

  /**
   * 解法 5
   * 
   * 看不懂
   * 
   * https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode/
   */
  /**
   * 解法6 
   * 看不懂
   * 
   * https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode/
   */

