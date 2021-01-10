/**
 * 228. 汇总区间
 * 
 * 给定一个无重复元素的有序整数数组 nums 。
 * 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
 * 列表中的每个区间范围 [a,b] 应该按如下格式输出：
 * "a->b" ，如果 a != b
 * "a" ，如果 a == b
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ret = [];
    let i = 0;
    const n = nums.length;
    while (i < n) {
        const low = i;
        i++;
        while (i < n && nums[i] === nums[i - 1] + 1) {
            i++;
        }
        const high = i - 1;
        const temp = ['' + nums[low]];
        if (low < high) {
            temp.push('->');
            temp.push('' + nums[high]);
        }
        ret.push(temp.join(''));
    }
    return ret;
};

/**
 * 第三方最优解
 * 
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var arr = []
      var start = 0
      var end = 0
      for(let i = 0; i < nums.length;i++){
        if(nums[i+1] - nums[i] !== 1){
          if(end == start){
            arr.push(`${nums[start]}`)
          }else{
            arr.push(`${nums[start]}->${nums[end]}`)
          }
          start = i + 1
          end = i + 1
        }else{
          end++
        }
      }
      return arr
};