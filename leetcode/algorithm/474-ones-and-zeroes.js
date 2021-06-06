/**
 * 474. 一和零
 * 
 * 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
 * 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。
 * 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
 */

/**
 * 这个逻辑也挺直白的把，双层循环，循环所有字符
 * 
 * NM,,,是多个字符串加起來有m个0，n个 1
 * 
 * 错误代码
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let strsLen = strs.length;
    if (!strsLen || (m === 0 && n === 0)) return 0;
    let count = 0;
    for (let i = 0; i < strs.strsLen; i++) {
        let element = strs[i];
        let len = element.length;
        let count01 = [0, 0]; // m,n
        for (let j = 0; j < len; j++) {
            if (element[j] === '0') {
                count01[0]++;
            } else {
                count01[1]++;
            }
        }
        if (count01[0] <= m && count01[1] <= n) {
            count++;
        }
    }
    return count;
};

/**
 * 考虑考虑 排序+循环
 * 还是不行，得有回溯的功能
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    strs = strs.sort((a,b)=>a.length-b.length);
    let len = strs.length;
    let count =0
    for (let i = 0; i < len; i++) {
        let e = strs[i];
        let eLen = strs[i].length;
        let eCount =[0,0];
        for (let j = 0; j < eLen; j++) {
            if(e[j]==='0'){
                eCount[0]++
            }else {
                eCount[1]++
            }
        }
        if(m-eCount[0] >-1 &&n-eCount[1] >-1 ){
            m = m-eCount[0]
            n = n-eCount[1]
            count++
        }   
    }
return count
};

/**
 * 官方题解，动态规划
 * 
 * 此问题比背包问题多了一个维度，动态规划求解的第一步是确定问题的数据结构，确定方式应该是以要处理的物品/事情为主体，
 * 以相关变量为副，像此问题，主体为字符串，那么数据结构的第一个元素应该是字符，然后是容量,最后结果: [str,0,1]转为dp数据结构为[str][0][1]
 * 此三维数组dp[i][j][k] 表示在前i个字符串中，使用j个0和k个1的情况下最多可以得到的字符串数量，
 * 
 * 当字符串数量大于0时，对于strs中的第i个字符串，首先遍历该字符串得到其中的 0 和 1 的数量，分别记作zeros 和 ones，
 * 然后对与 0 <= j <= m 和 0 <= k <= n,计算 dpp[i][j][k]
 * 
 * 动态规划的核心就是从头开始计算，然后当前元素与前一个元素进行对比判断，所以在动态规划中，初始值和转移方程才会时最重要的
 * 
 * 能理解动态规划的实现逻辑，但是对于状态转移方程还是不太理解
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    const length = strs.length;
    const dp = new Array(length + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)));
    for (let i = 1; i <= length; i++) {
        // 获取当前字符串的0，1的总量
        const zerosOnes = getZerosOnes(strs[i - 1]);
        let zeros = zerosOnes[0], ones = zerosOnes[1];
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                // 不选当前字符串的情况，那么当前的dp值就等于上一个元素
                dp[i][j][k] = dp[i - 1][j][k]; // j,k都是当前元素的相关数据，只需改变i就可以
                if (j >= zeros && k >= ones) { // 如果0，1数量符合条件
                    // 为啥j,k在位置上减数据，三维数据的数据结构还是不熟
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1);
                }
            }
        }
    }
    return dp[length][m][n];
};

const getZerosOnes = (str) => {
    const zerosOnes = new Array(2).fill(0);
    const length = str.length;
    for (let i = 0; i < length; i++) {
        zerosOnes[str[i].charCodeAt() - '0'.charCodeAt()]++;
    }
    return zerosOnes;

}
/**
 * 动态规划优化
 * 
 * 因为dp[i]只与dp[i-1]有关,那么第一个维度其实是可以去掉的
 */
 var findMaxForm = function(strs, m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    const length = strs.length;
    for (let i = 0; i < length; i++) {
        const zerosOnes = getZerosOnes(strs[i]);
        const zeros = zerosOnes[0], ones = zerosOnes[1];
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
            }
        }
    }
    return dp[m][n];
};

const getZerosOnes = (str) => {
    const zerosOnes = new Array(2).fill(0);
    const length = str.length;
    for (let i = 0; i < length; i++) {
        zerosOnes[str[i].charCodeAt() - '0'.charCodeAt()]++;
    }
    return zerosOnes;
}