/**
 * 455. 分发饼干
 * 
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，
 * 都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let s_i = s.length-1;
    let result = 0;
    for (let i = g.length-1; i > -1; i--) {
        let s_i_l = get_g_i(s,g[i],s_i);
            console.log(g[i],s_i)

        if(s[s_i]>-1) {
            // console.log(g[i],s_i,s_i)

            g[i]= null;
            s[s_i] = -1
            s_i = s_i_l
            result++
        }
    }
    return result;
};
const get_g_i = (s,num,start)=> {
    for (let i = start; i >-1; i--) {
        if(s[i]>= num) {
        console.log(i,s[i],num)

            return i
        }
        
    }
    return -1
}
/**
 * 脑子有点不会转
 */

/**
 * 官方题解
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const numOfChildren = g.length, numOfCookies = s.length;
    let count = 0;
    for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
        while (j < numOfCookies && g[i] > s[j]) {
            j++;
        }
        if (j < numOfCookies) {
            count++;
        }
    }
    return count;
};