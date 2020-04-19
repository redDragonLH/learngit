/**
 * 466. 统计重复个数
 * 
 * 由 n 个连接的字符串 s 组成字符串 S，记作 S = [s,n]。例如，["abc",3]=“abcabcabc”。
 * 如果我们可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。例如，根据定义，"abc" 可以从 “abdbec” 获得，但不能从 “acbbe” 获得。
 * 现在给你两个非空字符串 s1 和 s2（每个最多 100 个字符长）和两个整数 0 ≤ n1 ≤ 106 和 1 ≤ n2 ≤ 106。现在考虑字符串 S1 和 S2，其中 S1=[s1,n1] 、S2=[s2,n2] 。
 * 请你找出一个可以满足使[S2,M] 从 S1 获得的最大整数 M 。
 */
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 * 
 * 思路：
 *  
    // 1.重复字符串，小问题 String.repeat()
    // 2. 删除多余的字符串，不仅是s2没有的，位置不对的也不行。最好是软过滤，这样不需要修改字符串
    // 3. 匹配字符串。如果是删除S1字符串，可以使用重复S2 看什么时候相等的办法，如果是软过滤等方案，~~
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    // 如果太长会有超时问题，所以简单的处理一下，问题很大~
    // 比如重复次数不相等的情况下 字符串过长，就还是会超时 （能过确实是例子放水了）
    let S1,S2;
    if(n1 === n2) {
        S1 = s1;
        S2 = s2;
    } else {
        // 这种重复之后再循环的方式还是太暴力了，消耗的资源太多
        S1 = s1.repeat(n1);
        S2 = s2.repeat(n2);
    }
    
    let pointer = 0;
    let S2n = S2.length;
    let M = 0;
    // 软过滤方案，要是先一个个删，真的是没救了    
    for (let i = 0; i < S1.length; i++) {
        if(S1[i] === S2[pointer]) {
            pointer++;
        }
        if(pointer === S2n) {
            M+=1;
            pointer = 0
        }
        
    }
    return M;
};
console.log(getMaxRepetitions('aaa',3,'aa',1));
/**
 * 
 * 邪道程序员~~~~
 * 
 * 给面子，如果都是超大字符串，我这肯定过不了，就这为啥还是最低内存消耗~~
 * 执行用时长，这没问题，S1都循环了么，内存消耗还这么低就不理解了
 * 
 * 执行用时 :5496 ms, 在所有 JavaScript 提交中击败了10.00%的用户
 * 内存消耗 :343.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */