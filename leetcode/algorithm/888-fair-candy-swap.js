/**
 * 888. 公平的糖果棒交换
 * 
 * 爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。
 * 因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
 * 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
 * 如果有多个答案，你可以返回其中任何一个。保证答案存在。
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let Acount = A.reduce((a,c)=>a+=c,0)
    let Bcount = B.reduce((a,c)=>a+=c,0)
    const diff = Acount-Bcount;
    const diff2 = diff/2

    const res = []
    for (let i = 0; i < A.length; i++) {
        if(diff === diff2-A[i]){
            res.push(A[i])
            return;
        } 
    }
    for (let i = 0; i < B.length; i++) {
        if(diff === B[i] - diff2){
            res.push(B[i])
        } 
    }
    console.log(res);
};


/**
 * 官方题解
 */
var fairCandySwap = function(A, B) {
    const sumA = _.sum(A), sumB = _.sum(B);
    const delta = Math.floor((sumA - sumB) / 2);
    const rec = new Set(A);
    var ans;
    for (const y of B) {
        const x = y + delta;
        if (rec.has(x)) {
            ans = [x, y];
            break;
        }
    }
    return ans;
};