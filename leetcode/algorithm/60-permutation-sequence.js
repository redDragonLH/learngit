/**
 * 60. 第k个排列
 * 
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
"123"
"132"
"213"
"231"
"312"
"321"
 * 给定 n 和 k，返回第 k 个排列。
 * 说明：
 *    给定 n 的范围是 [1, 9]。
 *    给定 k 的范围是[1,  n!]。
 */

/**
 * 希望能找到阶乘的全排列公式，然后就可以按照输入数据直接计算到相应位置的字符串
 * 
 * 官方题解和我的思路是一样的，但是我数学不好~~
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 太难，告辞
 */
var getPermutation = function(n, k) {
    let factorial = new Array(n).fill(0);
    factorial[0] = 1;
    for (let i = 1; i < n; ++i) {
        factorial[i] = factorial[i - 1] * i;
    }

    --k;
    let ans = '';
    let valid = new Array(n+1).fill(0);
    for (let i = 1; i <= n; ++i) {
        let order = k / factorial[n - i] + 1;
        for (let j = 1; j <= n; ++j) {
            order -= valid[j];
            if (order == 0) {
                ans+=j;
                valid[j] = 0;
                break;
            }
        }
        k %= factorial[n - i];
    }
    return ans;
};

/**
 * java 代码 
 * 
class Solution {
    public String getPermutation(int n, int k) {
        int[] factorial = new int[n];
        factorial[0] = 1;
        for (int i = 1; i < n; ++i) {
            factorial[i] = factorial[i - 1] * i;
        }

        --k;
        StringBuffer ans = new StringBuffer();
        int[] valid = new int[n + 1];
        Arrays.fill(valid, 1);
        for (int i = 1; i <= n; ++i) {
            int order = k / factorial[n - i] + 1;
            for (int j = 1; j <= n; ++j) {
                order -= valid[j];
                if (order == 0) {
                    ans.append(j);
                    valid[j] = 0;
                    break;
                }
            }
            k %= factorial[n - i];
        }
        return ans.toString();
    }
}
 */