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

/**
 * 官方题解  贪心算法
 * 贪心算法: 在每一步选择中都采取在当前状态下最好或最优(即最有利)的选择,从而希望导致结果最好或最优.平常考虑问题中经常是这个思考模式,但是并无法察觉出来
 * 
 */
var isPossible = function(nums) {
    const countMap = new Map(); // 存储数组中的每个数字的剩余次数
    const endMap = new Map(); // 存储数组中的每个数字作为结尾的子序列的数量。

    // 初始化countMap 
    for (const x of nums) {
        const count = (countMap.get(x) || 0) + 1;
        countMap.set(x, count);
    }

    for (const x of nums) {
        // 怎么还会有countMap 没有的~~
        const count = countMap.get(x) || 0;
        if (count > 0) {
            // 是否有以比这个小1的数字结尾的子数组
            const prevEndCount = endMap.get(x - 1) || 0;
            // 有则更新两个map
            if (prevEndCount > 0) {
                countMap.set(x, count - 1);
                endMap.set(x - 1, prevEndCount - 1);
                endMap.set(x, (endMap.get(x, 0) || 0) + 1);
            } else {
                // 直接取连着的两个,如果没有说明有一个子数组无法组成最小3个数量
                const count1 = countMap.get(x + 1, 0);
                const count2 = countMap.get(x + 2, 0);
                if (count1 > 0 && count2 > 0) {
                    countMap.set(x, count - 1);
                    countMap.set(x + 1, count1 - 1);
                    countMap.set(x + 2, count2 - 1);
                    endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1);
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};
/**
 * 代码很简单,但是和贪心有什么关系呢
 * 只考虑当前的步骤,而不考虑后面的吗
 * 
 * 1.贪心选择性质。所谓贪心选择性质是指所求问题的整体最优解可以通过一系列局部最优的选择，即贪心选择来达到。这是贪心算法可行的第一个基本要素，也是贪心算法与动态规划算法的主要区
 * 
 * 动态规划算法通常以自底向上的方式解各子问题，而贪心算法则通常以自顶向下的方式进行，以迭代的方式作出相继的贪心选择，每作一次贪心选择就将所求问题简化为规模更小的子问题。
 * 对于一个具体问题，要确定它是否具有贪心选择性质，必须证明每一步所作的贪心选择最终导致问题的整体最优解。
 * 2. 当一个问题的最优解包含其子问题的最优解时，称此问题具有最优子结构性质。问题的最优子结构性质是该问题可用动态规划算法或贪心算法求解的关键特征。
 */