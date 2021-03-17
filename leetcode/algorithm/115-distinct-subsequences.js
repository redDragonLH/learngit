/**
 * 115. 不同的子序列
 * 
 * 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。
 * 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
 * 题目数据保证答案符合 32 位带符号整数范围。
 */

/**
 * 核心问题是获取所有 子序列
 * 
 * 删除的思路比较复杂啊,想不明白
 * 
 * 动态规划步骤
 *  1. 定义数组元素的含义
 *      创建二维数组 dp，其中 dp[i][j] 表示在 s[i:] 的子序列中t[j:] 出现的个数。
 *          上述表示中，s[i:] 表示 s 从下标 i 到末尾的子字符串，t[j:] 表示 t 从下标 j 到末尾的子字符串。
 *  2. 找出数组元素之间的关系式
 *      当 i < m 并且 j < n 时,考虑dp[i][j]的计算
 *          * 当 s[i] = t[j]
 *              * 如果 s[i] 和 t[j]匹配,则考虑 t[j + 1: ] 作为 s[i + 1:]的子序列,子序列数为 dp[i + 1][j + 1]
 *              * 如果 s[i] 不和 t[j] 匹配,则考虑 t[j:] 作为s[i + 1: ]的子序列,子序列数为 dp[i + 1][j]
 *          * 当 s[i] != t[j] , s[i] 不能和 t[j] 匹配,因此只考虑 t[j:]作为 s[i + 1:] 的子序列,子序列数为 dp[i+1][j]
 *              因此当 s[i] != t[j] ,有 dp[i][j]=dp[i+1][j]
 *  3. 找出初始值
 * 
 * dp[i][j]={ dp[i+1][j+1]+dp[i+1][j],      s[i]=t[j]
              dp[i+1][j],                   s[i]!=t[j]
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length, n = t.length;
    if (m < n) {
        return 0;
    }
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        dp[i][n] = 1;
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s[i] == t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
            } else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
};