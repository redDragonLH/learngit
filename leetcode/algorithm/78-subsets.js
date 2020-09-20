/**
 * 78. 子集
 * 
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。
 */

/**
 * 阶乘？
 * 回溯~~过滤太麻烦了，失败
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const len = nums.length;
    const result =[[]]
    if(!len) return result;

    deep(result,nums,[],0);
    return result;
};
const deep = (result,nums,path,pos)=> {
    console.log(path);
    pos < nums.length && result.push([...path]);
 
    for (let i = pos; i < nums.length; i++) {
        path.push(nums[i])
        deep(result,nums,path,pos+1);
        path.pop()

    }
}
console.log(subsets([1,2,3]));

/**
 * 
 * 
 */
var subsets = function(nums) {
    const len = nums.length;
    const result =[]
    if(!len) return result;

    for (let i = len-1; i > -1; i--) {
        let rlen = result.length;
        for (let j = 0; j < rlen; j++) {
            result.push([...result[j],nums[i]])
        }
        result.push([nums[i]])
    }
    result.push([])
    return result;
};

/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了42.99%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了5.10%的用户
 */