/**
 * 718. 最长重复子数组
 * 
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 
 * 说明:
 * 
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 */

/**
示例 1:
    输入:
    A: [1,2,3,2,1]
    B: [3,2,1,4,7]
    输出: 3
    解释: 长度最长的公共子数组是 [3, 2, 1]。
*/

/**
 * 思路：给一个数组转为对象，元素为键，下标为值，轮询另一个数组的元素，判断是否能在对象中匹配到，如果匹配到则从这两个元素的下标循环检查有多少相等
 * 
 * 问题： 重复元素问题，肯定会有重复的元素，但是下标和所处的环境肯定不一样
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let Blen = B.length;
    let Alen = A.length;

    if(!Alen || !Blen) return 0;
    let Arr = {};
    // 转为对象，内部结构用数组
    A.forEach((e,i) => {
        if(Arr[e]) {
            Arr[e].push(i)
        }else {
            Arr[e] = [i];
        }
    })
    let num = 0;
    // 最绕的地方～
    for (let i = 0; i < Blen; i++) {
        let e = Arr[B[i]];
        // 轮询第二个数组，如果这个数组元素能匹配上第一个数组
        if(e) {
            let count = e.length;
            let c = 0;
            // 则轮询从对象获取的元素 数组
            while(c < count) {
                let linNum = 1; // 因为有相等才轮询，所以起始就是1
                let flag = e[c]+1; // 当前元素已经相等，跳过
                for (let d = i+1; d < Blen; d++) { // 从获得的第二个数组的下标位置开始轮询，（从那个数组下标轮询都一样，反正按照最短的算）
                    if(B[d] === A[flag]) { // 如果相等则处理
                        linNum++
                        flag++;
                        num = Math.max(num,linNum);
                    } else { // 不相等的话循环直接关闭
                        break;
                    }
                    if(linNum === Alen || linNum === Blen) return linNum;// 如果与某一个元素的数组相等则直接返回
                }
                c++;
            }
        }   
    }
    return num;
};

console.log(findLength([0,0,0,0,1],[1,0,0,0,0]));

/**
 * 无力吐槽的速度～～～竟然还没有超时
 * 
 * 执行用时：9064 ms, 在所有 JavaScript 提交中击败了5.70%的用户
 * 内存消耗：37.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */


 /**
  * 官方：动态规划
  * 
  * java 
  * 
  * class Solution {
  *     public int findLength(int[] A, int[] B) {
  *         int n = A.length,m = B.length;
  *         int[][] dp = new int[n+1][m+1];
  *         int ans = 0;
  *         for (int i = n - 1; i>=0; i--) {
  *             for (int j = m -1; j >= 0; j--) {
  *                 dp[i][j] = A[i] == B[j] ? dp[i+1][j+1]+1 : 0;
  *                 ans = Math.max(ans,dp[i][j]);
  *             }
  *         }
  *         return ans;
  *     }
  * }
  */
 /**
  * 动态规划思路
  * 状态转移方程： dp[i][j] = dp[i+1][j+1] +1 从尾到头顺序，当前元素的状态只与上一个状态有关
  * 
  * 执行用时：67 ms, 在所有 Java 提交中击败了35.66%的用户
  * 内存消耗：49.2 MB, 在所有 Java 提交中击败了100.00%的用户
  */