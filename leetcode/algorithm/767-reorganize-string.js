/**
 * 767. 重构字符串
 * 
 * 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
 * 若可行，输出任意可行的结果。若不可行，返回空字符串。
 */



/**
 * 相邻的字符串不能相等,是不是可以把多余的字符串提取出来,然后在插入进去,试试
 * 
 * 
 * 失败    估计得是贪心或者动态规划啥的
 * 
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let obj = {};
    const over = [];
    for (let i = 0; i < S.length; i++) {
        if(!obj[S[i]]) {
            obj[S[i]] = true;
        }else {
            over.push(S[i])
        }
    }
    let result = ''
    for (const key in obj) {
        result = key+result;
       for (let i = 0; i < over.length; i++) {
            if(over[i]  && result[0] !== over[i]){
                result= over[i] + result;
                over[i] = false;
            }
           
       }
    }
    for (let i = 0; i < over.length; i++) {
        if(over[i]) return ""
        
    }
    return result;
};
reorganizeString("aaab")

/**
 * 贪心啥的也得考虑当前循环是否完毕,并且不影响到其他的循环,以数组的引用调用,这玩意就没法做
 * 
 * 或许可以以每个字母开头循环,计算出有多少个字母,然后每个字母开头循环一遍,有就返回,没有就继续,还是很难解决引用数据结构的问题
 */
var reorganizeString = function(S) {
    let len = S.length;
    let arr = S.split("");
    
}
reorganizeString("aaab")


/**
 * 
 * 官方题解 贪心算法
 * 
 * 
 * @param {*} c 
 */
const getIdx = (c) => c.charCodeAt() - 'a'.charCodeAt();
const getAlpha = (c) => String.fromCharCode(c);
var reorganizeString = function(S) {
    if (S.length < 2) {
        return S;
    }
    const counts = new Array(26).fill(0);
    let maxCount = 0;
    const length = S.length;
    for (let i = 0; i < length; i++) {
        const c = S.charAt(i);
        counts[getIdx(c)]++;
        maxCount = Math.max(maxCount, counts[getIdx(c)]);
    }
    if (maxCount > Math.floor((length + 1) / 2)) { // 一种字母超过二分之一就肯定会有相邻的情况
        return "";
    }

    const reorganizeArray = new Array(length);
    let evenIndex = 0, oddIndex = 1;
    const halfLength = Math.floor(length / 2); // 半长
    for (let i = 0; i < 26; i++) {
        const c = getAlpha('a'.charCodeAt() + i);
        while (counts[i] > 0 && counts[i] <= halfLength && oddIndex < length) {
            reorganizeArray[oddIndex] = c;
            counts[i]--;
            oddIndex += 2;
        }
        while (counts[i] > 0) {
            reorganizeArray[evenIndex] = c;
            counts[i]--;
            evenIndex += 2;
        }
    }
    return reorganizeArray.join('');
};