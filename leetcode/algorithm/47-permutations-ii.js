/**
 * 47. 全排列 II
 * 
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const len = nums.length;
    const result=[];
    if(!len) return result
    nums.sort((a,b)=> a-b);
    // 去重
    const obj ={}
    const dfs =(path,pos)=> {
        if(path.length === len) {
            if(obj[path.join('')]) return false
            result.push([...path])
            obj[path.join('')]=true;
            return false
        }
        console.log(pos,path);
        for (let i = pos; i < len; i++) {
            path.push(nums[i]);
            dfs(path,pos+1);
            path.pop();       
        }
    }
    dfs([],0)
    return result
};
console.log(permuteUnique([1,1,2]));