/**
 * 118. 杨辉三角
 * 
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===0) return []
    if(numRows===1) return [[1]];
    let result = [[1],[1,1]]
    if(numRows===2) return result;
    for (let i = 2; i < numRows; i++) {
        result.push([1]);
        for (let j = 1; j < i; j++) {
            
            result[i][j]=result[i-1][j]+result[i-1][j-1];
        }
        result[i].push(1);
    }
    // console.log(result);
    return result;
};

/**
 * 判断太多，拖沓，丑陋
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了88.16%的用户
 * 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了5.07%的用户
 */