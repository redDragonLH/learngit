/**
 * 1248. 统计「优美子数组」
 * 
 * 给你一个整数数组 nums 和一个整数 k。
 * 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
 * 请返回这个数组中「优美子数组」的数目。
 */
/**
 * 思路： 找到 k个奇数节点与起始节点与结束节点再往两边延申到上一个和下一个奇数节点，这样延申的两边的距离相乘就是这K个奇数节点组成的数组能组成的子数组数量之和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let count = 0; // 子数组数量
    // odd : 这是保存当前奇数的个数，到了 k+1 个说明，子数组的最大集已经可以计算出来了
    let start = 0,end = 0,odd = 0; // 开始位置，是当前子数组的开始，也就是当前k个奇数数组的上一个奇数的位置 -1，end 是当前子数组的结尾，当前数组延申到下一个奇数的前一个位置，这两个位置是为了包含奇数两边的偶数而设置的
    let stock = []; // 存放奇数节点的位置 ps 名字起的不好
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] %2) { // 查看是否奇数
            odd++; // 当前奇数数量加一
            stock.unshift(i) // 把奇数位置存到数组
        }
        // k + 1 个说明 ，当前优美子数组的最大集已经可以计算了， end 就是k+1 奇数的位置 -1 ；
        if(odd === k+1 || (odd === k && end === nums.length-1)) {
            // 计算出子数组的 外延的 两边有多少个偶数，优美子数组的最大集就包括了包含k个奇数以及从这个子数组外的上一个奇数到下一个奇数的偶数的数组
            let before = stock[stock.length-1] - start;
            let after = end - stock[odd === k ? 0:1]-(odd === k ? 0:1); // odd等于k 说明后边没有奇数了，而stock其实是存了当前子数组的下一个奇数，为了end么
            if(before === 0 || after === 0) { // 如果有一边等0 那么子数组的生成方式只能是另一边的增减偶数个数，还有k奇数自己与内部无法动的 偶数
                count += before + after +1;
            }else { // 两边都有则排列方式就多了
                count +=(before+1) * (after+1);
            }

            start = stock.pop()+1; // 更新起始位置，因为又开始往后找奇数，所以新的开始位置就是 旧的数组第一奇数，还要减去一
            if(end === nums.length-1 && nums[end] %2){// 贴边之后并且奇数还够则计算一下start那边有多少种类子数组
                count+= stock[stock.length-1] - start+1;
            }

            odd--;
        }
        end++
    }
    return count;
};
/**
 * 操作太多
 * 
 * 内存消耗应该是网站计算有问题
 * 
 * 执行用时 :968 ms, 在所有 JavaScript 提交中击败了13.33%的用户
 * 内存消耗 :96.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */