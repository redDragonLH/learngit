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

