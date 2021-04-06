/**
 * 80. 删除有序数组中的重复项 II
 * 
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 说明：
 *      为什么返回数值是整数，但输出的答案是数组呢？
 *      请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 */

/**
 * 获取单个元素数量,超出两个就获取覆盖
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len < 3) return len;
   let singleCount = 1;
   //  重新赋值的跨度
   let spanCount = 0;
   for (let i = 1; i < len; i++) {

       if(nums[i] === nums[i-1]){
           singleCount++;
       }else {
           singleCount=1;
       }
       if(singleCount >2) {
           spanCount++;
       }
       // 多余的数据需要被覆盖,那怎么样覆盖比较好,直观一点的方法就是遇到需要覆盖的就把右侧整体挪一下,但是这个方案估计得需n的2次方时间
       // 另一个方案就是计算跨度距离,因为每遇到一个重复数据那么跨度肯定要加一,而且不会减少,这样跨度就会越来越大,用当前位置减去跨度就应该是数据正确的存放地
       // 但是这个方案预计是有问题的因为这样实时改变数据预计可能会打乱数据,导致出现问题,但是实际中并么有发生
       nums[i-spanCount] = nums[i]
   }
   return len-spanCount;
};