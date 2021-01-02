/**
 * 239. 滑动窗口最大值
 * 
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回滑动窗口中的最大值。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const len = nums.length;
    if(!len || !k) return [];
    if(k>len) return [Math.max(...nums)];
    // if(k===1) return nums;
    // 获取第一次窗口的最大值
    const maxValue =[Math.max(...nums.slice(0,k))];
    // 上一个最大值的位置
    let prevMaxIndex = nums.findIndex((e)=>maxValue[0]===e)

    for (let i = k; i < len; i++) {
        // 判断上一个最大位置是否在当前窗口
        if(prevMaxIndex < i-k) {
        // 在的话就判断它与当前窗口新进来的最右边的数字比较
            maxValue.push(Math.max(maxValue[maxValue.length-1],nums[i]))
            if(maxValue[maxValue.length-1]=== nums[i]) prevMaxIndex = i;
        } else {
            // 不在就另行判断
            // 应该可以用slice代替，但是index的查找就麻烦了
            let tempMax = nums[i];
            let tempMaxIndex = i;
            for (let j = i-k+1; j <= i; j++) {
                if(tempMax < nums[j]){
                    tempMax = nums[j];
                    tempMaxIndex = j;
                }
            }
            maxValue.push(tempMax);
            prevMaxIndex = tempMaxIndex;
        }
    }
    
    return maxValue
};
/**
 * 超出时间限制 ......
 * 
 * 执行用时：9708 ms, 在所有 JavaScript 提交中击败了5.00%的用户
 * 内存消耗：68.8 MB, 在所有 JavaScript 提交中击败了36.69%的用户
 */

var maxSlidingWindow = function(nums, k) {
    const len = nums.length;
    if(!len || !k) return [];
    if(k>len) return [Math.max(...nums)];
    // if(k===1) return nums;
    // 获取第一次窗口的最大值
    const maxValue =[Math.max(...nums.slice(0,k))];
    // 上一个最大值的位置
    let prevMaxIndex = nums.findIndex((e)=>maxValue[0]===e)

    for (let i = k; i < len; i++) {
        // 判断上一个最大位置是否在当前窗口
        if(prevMaxIndex < i-k) {
        // 在的话就判断它与当前窗口新进来的最右边的数字比较
            maxValue.push(Math.max(maxValue[maxValue.length-1],nums[i]))
            if(maxValue[maxValue.length-1]=== nums[i]) prevMaxIndex = i;
        } else {
            // 不在就另行判断
            // 应该可以用slice代替，但是index的查找就麻烦了
            let tempMax = Math.max(...nums.slice(i-k+1,i));
            let tempMaxIndex = i;
            for (let j = i; j > i-k; j--) {
                if(tempMax === nums[j]){
                    tempMaxIndex = j;
                    break;
                }
            }
            maxValue.push(tempMax);
            prevMaxIndex = tempMaxIndex;
        }
    }
    
    return maxValue
};