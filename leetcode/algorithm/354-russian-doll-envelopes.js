/**
 * 354. 俄罗斯套娃信封问题
 * 
 * 给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 * 请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 */

/**
 * 
 * emmm~~~ 应该先按照 宽或高排序,然后在循环的过程中匹配另一个,:但是这个情况只能覆盖从头开始,非从头开始的就没办法了
 * 
 * 这种简单粗暴的办法无法获得最优解
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a,b)=>a[0]-b[0])
    console.log(envelopes);
    let max = 0
    for (let i = 0; i < envelopes.length; i++) {
        let count = 1
        let temp = envelopes[i][1];
        let temp0= envelopes[i][0];
        for (let j = i+1; j < envelopes.length; j++) {
            console.log(envelopes[i][0] ,envelopes[j][0],envelopes[i][0] !== envelopes[j][0])
            if(temp0 !== envelopes[j][0] && temp < envelopes[j][1]){
                temp=envelopes[j][1]
                temp0=envelopes[j][0]
                count++
            }
        }
        max = Math.max(max,count)
    }
    return max
};


/**
 * 官方题解: 动态规划
 * 
 */
var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 0) {
        return 0;
    }
    
    const n = envelopes.length;
    envelopes.sort((e1, e2) => {
        // 以宽度为主,宽度为升序排列.宽度相同,则以高度为降序排列
        if (e1[0] !== e2[0]) {
            return e1[0] - e2[0]; 
        } else {
            return e2[1] - e1[1];
        }
    })
    // 设 f[i] 表示 h 的前 i 个元素可以组成的最长严格递增子序列的长度
    const f = new Array(n).fill(1);
    let ans = 1;
    for (let i = 1; i < n; ++i) {
        // 从 0 到 i
        for (let j = 0; j < i; ++j) {
            if (envelopes[j][1] < envelopes[i][1]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        }
        ans = Math.max(ans, f[i]);
    }
    return ans;
};