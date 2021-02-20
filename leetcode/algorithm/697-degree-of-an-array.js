/**
 * 697. 数组的度
 * 
 * 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 */

/**
 * 
 * 找到最大的度,然后获取这个度的长度
 * 
 * 超级low的方案,先获取每种元素的度与最大最小位置,然后循环所有数据,过滤掉其他小的度,把最大度的数据位置相减,获取最小的长度
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const numsObj = {};
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        if(!numsObj[nums[i]]){
            numsObj[nums[i]] = {
                len: 1,
                pos:[i]
            }
        }else {
            numsObj[nums[i]].len+=1
            numsObj[nums[i]].pos[1] = i
            maxLen = Math.max(maxLen,numsObj[nums[i]].len)
        }
    }
    if(nums.length<2) return nums.length;

    
    let min = 50000;
    Object.keys(numsObj).forEach(e=> {
        let el = numsObj[e]
        if(el.len === maxLen) {
            //                                  必须得+1
            min = Math.min(min,el.pos[1]-el.pos[0]+1)
        }
    })

    // 多余判断
    return min ===50000?1:min;
};

/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了99.47%的用户
 * 内存消耗：42.1 MB, 在所有 JavaScript 提交中击败了59.89%的用户
 */