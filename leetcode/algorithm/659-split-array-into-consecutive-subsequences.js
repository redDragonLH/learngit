/**
 * 659. 分割数组为连续子序列
 * 
 * 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为 3 。
 * 如果可以完成上述分割，则返回 true ；否则，返回 false 。
 */

/**
 * 轮询,轮询的过程中判断是否能连得上,如果连得上,推到子数组中,如果连不上(越数或者是重复),则看其他子数组连得上不,
 * 连不上就重新建一个数组,最后检查所有子数组
 * 
 * 思路一样,但是人家用最小堆
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let num = nums.length;
    if(num < 3) return false; 
    const result = [[nums[0]]];
    for (let i = 1; i < num; i++) {
        let min_index = -1;
        for (let j = 0; j < result.length; j++) {
            if((result[j][0])+1 === nums[i]) {
                if(min_index===-1)min_index=j;
                else min_index = result[min_index].length > result[j].length ? j : min_index;
            }
        }
        if(min_index !== -1) {
            result[min_index].unshift(nums[i]);
        }else {
            result.push([nums[i]]);
        }
        
    }
    for (let i = 0; i < result.length; i++) {
        if(result[i].length < 3) return false;
    }
    return true
};
/**
 * 效率感人,你就没有超时么
 * 
 * 执行用时：724 ms, 在所有 JavaScript 提交中击败了14.00%的用户
 * 内存消耗：44.7 MB, 在所有 JavaScript 提交中击败了92.00%的用户
 */