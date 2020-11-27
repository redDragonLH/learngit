/**
 * 454. 四数相加 II
 * 
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
 * 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。
 */

/**
 * 先加对比后加
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let result=0;
    const ab ={};
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let num = A[i]+B[j]
            ab[num]? ab[num]+=1:ab[num]=1;
        }
    }
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            let res = ab[0-C[i]-D[j]]
            if(res) {
                result+=res;
            }
            
        }
        
    }
    return result;
};
fourSumCount(A = [ 1, 2]
    ,B = [-2,-1]
    ,C = [-1, 2]
    ,D = [ 0, 2])

/**
 * 速度感人
 * for 循环的一个问题是循环和要循环的数据没有关系,
 * 必须再去数据内去获取一次
 * 
 * 执行用时：388 ms, 在所有 JavaScript 提交中击败了35.71%的用户
 * 内存消耗：69.9 MB, 在所有 JavaScript 提交中击败了17.30%的用户
 */

/**
 * 官方题解
 * 
 * 有点迷茫,逻辑都一样就差了方法和一个set
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const countAB = new Map();
    // forEach 比我for循环要快吗,这~~
    A.forEach(u => B.forEach(v => countAB.set(u + v, (countAB.get(u + v) || 0) + 1)));
    let ans = 0; 
    // for in 这~~~
    for (let u of C) {
        for (let v of D) {
            if (countAB.has(-u - v)) {
                ans += countAB.get(-u - v);
            }
        }
    }
    return ans;
};

/**
 * 第三方最快题解
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D, h = new Map(), r = 0) {
    // 逻辑都一样啊~~~写法有这么大的差距吗
    for(var a of A)
        for(var b of B)
            h.set(0 - a - b, (h.get(0 - a - b) || 0) + 1)
    for(var c of C)
        for(var d of D)
            h.has(c + d) && (r += h.get(c + d))
    return r
};
/**
 * 看来 map 还是比纯object 快
 */