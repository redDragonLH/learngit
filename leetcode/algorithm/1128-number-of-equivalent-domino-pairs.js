/**
 * 1128. 等价多米诺骨牌对的数量
 * 
 * 给你一个由一些多米诺骨牌组成的列表 dominoes。
 * 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
 * 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。
 */

/**
 * @param {number[][]} dominoes
 * @return {number}
 * 
 * 二元组 + 计数
 * 
 */
var numEquivDominoPairs = function(dominoes) {
    const num = new Array(100).fill(0);
    let ret = 0;
    for (const domino of dominoes) {
        // 把二元组转成一个从小到大排序的二位数
        const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
        // 最重要的是这行
        // 1+1，2+2，4+3,7+4
        ret += num[val];
        num[val]++;
    }
    return ret;
};

/**
 * 第三方 优秀题解
 */
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let ans = 0 , map = new Map()
    for(let d of dominoes){
       let [i,j] = d , key
       if(i < j)  key=10*i+j
       else key = 10*j+i
       map.set(key,(map.get(key)||0)+1)
    }
    for(let [,v] of map){
        ans += v*(v-1)/2
    }
    return ans
};