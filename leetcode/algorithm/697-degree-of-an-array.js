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
            // 合并循环 思路
            // 判断单个元素的len是否等于maxLen,等于的话就更新子数组长度,有个问题是必须保存上一次更新子数组长度的元素的len,否则会遇到问题
            // 如果上一次的子数组长度与当前子数组长度相同则进行对比,如果上一次子数组长度小于当前子数组长度则直接替换
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
 * 官方的和我一样啊~~~
 * 
 * 应该可以把后一次循环合并到第一次里去,但是这样就增加了第一个循环的复杂度
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了99.47%的用户
 * 内存消耗：42.1 MB, 在所有 JavaScript 提交中击败了59.89%的用户
 */