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
