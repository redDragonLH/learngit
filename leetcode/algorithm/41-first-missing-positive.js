/**
 * 41. 缺失的第一个正数
 * 
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 */

/**
 * 评论给出的逻辑，把数组的元素插在和它数值一样的下标下边，然后遍历数据，下标和元素不相等的下标就是缺失的数据，如果都相等说明这个数就是没有在数据内出现的数
 * 
 * 但是在代码编写过程中有很多问题导致做了很多操作导致没有达到最高的效率
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let len = nums.length;
    if(!len) return 1;
    // leetcode 在sort内只认 (-)减号，不认大于小于等
    nums = nums.sort((a,b)=> a-b).filter(a=> a>0) // 先排序再过滤，因为手动循环插入数据会导致过于复杂，因为插入时可能会覆盖当前轮询下标下的元素（可以考虑while 循环优化因为使用set导致逻辑变复杂）
    nums.unshift(0) // +0 因为在处理数据时最好不处理 0，但是循环时必须有0 （也可以在循环时每个下标都加1，但是这样又多了多余操作）
    nums = Array.from(new Set(nums)); // 因为可能有 重复数据所以用Set 结构去重，但是set轮询的时候没有下标的概念，所以又得转换成数组，麻烦
    // 下边就是正常的检验数据了，基本就没啥可优化的了
    len = nums.length;
    for (var i = 0; i < len; i++) {
        if(nums[i] !== i) return i;
    };
    return len;
};
// console.log(firstMissingPositive([3,4,-1,1]));

/**
 * 优化点： 排序与过滤自己写相对应得方法应该会快很多，而且可以避免set与array互相转换的损耗
 * 
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了45.83%的用户
 * 内存消耗：33.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

/**
 * 上一方法的优化方案，主要优化 数组的排序和过滤
 * 
 * 逻辑未跑通
 */
var firstMissingPositive = function(nums) {
    let len = nums.length;
    if(!len) return 1;
    if(len===1) return nums[0]===1? 2 : 1;

    let count = 0;
    let pick = -1;
    while (count < len) {
        if(count === nums[count]) {
            count++;
            continue;
        }
        if (pick > -1 && pick < len) {
            if(nums[pick] >-1 && nums[pick]< len) {
                let c = nums[pick];
                nums[pick] = pick;
                pick = c;
            }
            else {
                nums[pick] = pick;
                pick = -1;
            }
            continue;
        }
        let c = nums[count];
        if(c > 0 && c < len) {
            pick = nums[c];
            nums[c] = c;
        }
        count ++;
    }

    len = nums.length;
    for (var i = 1; i < len; i++) {
        if(nums[i] !== i) return i;
    };
    return len;
};
console.log(firstMissingPositive([1]));