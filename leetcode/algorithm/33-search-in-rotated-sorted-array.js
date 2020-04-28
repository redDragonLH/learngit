/**
 * 33. 搜索旋转排序数组
 * 
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 你可以假设数组中不存在重复的元素。
 *      你的算法时间复杂度必须是 O(log n) 级别。
 */
/**
 * 思路：双指针法，从两边遍历
 * 
 * 超出时间限制，失败
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 备注： 旋转这个条件没用上
 */
var searchFail = function(nums, target) {
    let pos = -1;
    if(nums.length<2){
        if(nums[0] === target) pos = 0;
        return pos;
    }
    let start = 0;
    let end = nums.length - 1;
    while (start !== end && pos === -1) {
        if(nums[start] === target) pos = start;
        if(nums[end] === target) pos = end;
        start++;
        end--;
    }
    return pos;
};
// console.log(searchFail([4,5,6,7,0,1,2],0))

/**
 * 二分法，从中间分开，然后判断在哪边，然后继续拆分
 * 
 * 从中间分必定有一部分是有序的，有一部分是无序的，这个可以用选出来的中间节点与起点，终点的数据对比得出
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchfail2 = function(nums, target) {
    let pos = -1;
    if(nums.length<2){
        if(nums[0] === target) pos = 0;
        return pos;
    }
    let len = nums.length
    let start = 0;
    let end = len -1;
    let mid = Number.parseInt(len /2)
    while(pos === -1 && !(start > mid || end < mid)) {
        if(nums[mid] === target) {
            pos = mid;
        }
        if((nums[mid] - nums[start] > 0 && (nums[mid] >= target && nums[start] <= target) ) || (nums[mid] - nums[start] < 0 && nums[start] >= target || nums[mid] <= target)) {
            end = mid
            mid = Number.parseInt((mid - start) /2)
        } else {
            start = mid;
            mid = Number.parseInt((end - mid) / 2 + mid)
        }

    }
    return pos;
};
// console.log(searchfail2([1,3],1))
/**
 * 问题检查
 * 数组过短判断应该没有什么问题
 * 
 * while 判断逻辑较多而且并无必要，只需判断起点终点是否重叠或已经交错 （直接return 就不需要检查 位置是否已经赋值，逻辑自洽但是冗余太多）
 * 
 * 分步判断，就不需要同时进行那么多判断（此步应该是影响速度最大的问题之一,判断条件过多并且放在一起判断会影响性能，建议合理分层，以及优化判断条件）
 * 
 * 循环内数据操作也比较多，可以优化（官方题解应该也是差不多的操作，影响应该不大）
 * 
 */


 
/**
 * 官方题解 c 改版
 * 
 * 为什么官方的能过，而我的 fail2 却要超时呢，要深究
 * @param {} nums 
 * @param {*} target 
 */
var search = function(nums, target) {
    let n = nums.length
    if (!n) return -1;
    if (n == 1) return nums[0] == target ? 0 : -1;
    let l = 0;
    let r = n -1;
    while(l <= r) {
        
        let  mid = Number.parseInt((l + r) / 2);
        if (nums[mid] == target) return mid;
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
};
console.log(search([1,3],1))