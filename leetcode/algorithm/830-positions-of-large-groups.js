/**
 * 830. 较大分组的位置
 * 
 * 在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。
 * 例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
 * 分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为 [3,6] 。
 * 我们称所有包含大于或等于三个连续字符的分组为 较大分组 。
 * 找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。
 */

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const len = s.length;
    const result = [];
    if(len<3) return result;
    let tempStr=s[0];
    let tempIndex = 0;
    for (let i = 1; i < s.length; i++) {
        if(tempStr !== s[i]){
            if(i-tempIndex>2){
                result.push([tempIndex,i-1]);
                tempStr = s[i];
                tempIndex = i;
            }
        }
    }
    if(len - tempIndex>2) {
        result.push([tempIndex,len-1]);
    }
    console.log(result);
    return result
};
/**
 * 有点慢
 * 执行用时：112 ms, 在所有 JavaScript 提交中击败了29.52%的用户
 * 内存消耗：41.8 MB, 在所有 JavaScript 提交中击败了15.53%的用户
 */