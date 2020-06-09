/**
 * 238. 除自身以外数组的乘积
 * 
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 
 *  
 * 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
 * 
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 * 进阶：
 * 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    if(len < 3 ) return nums.reverse(); // 如果数组只有两个以及以下的元素，反转后返回，两个元素互为前后缀，单个元素反转还是它
    let arr = [[!!nums[0],0]];
    arr[len - 1] = [0,!!nums[len -1 ]]; // 前后缀二维数组中的第一个元素的前缀和最后一个元素的后缀是不参与运算的，但是如果在循环中判断当前位置很麻烦，而且如果数据是0 是参与运算的，所以只能这样增加一个条件，1乘所有都不变，如果元素是0 ，则把二维数组对应位置设为0，参与运算
    let start = 1,end = len - 2;
    // 正常前后缀的获取计算
    while(end > -1 ){
        let startC = arr[start-1][0] * nums[start-1];
        
        arr[start] ? arr[start][0] = startC : arr[start] = [startC,0];
        start++
        let endC = arr[end+1][1] * nums[end+1];
        arr[end] ? arr[end][1] = endC : arr[end] = [0,endC];
        end--
    }
    // 每个元素的前后缀相乘
    // 但是最后一个元素的后缀，与第一个元素的前缀是不应该参与计算的，因为根本没有
    return arr.map((e, i)=> (i === 0 || e[0]) * (i === len - 1 || e[1]))
    
};
/**
 * 边界条件的判断过于复杂
 * 
 * 时间复杂度 O(n) 循环两次，先获取前后缀积，后相乘
 * 空间复杂度 O(n) 除了常量 还有一个二维数组临时保存 前后缀数据，应该把 二维数组的2算上
 * 
 * 执行用时 :128 ms, 在所有 JavaScript 提交中击败了26.46%的用户
 * 内存消耗 :50.6 MB, 在所有 JavaScript 提交中击败了20.00%的用户
 */

console.log(productExceptSelf([2,3,5,0]));

/**
 * 空间复杂度 O(1)O(1) 的方法
 * 
 * P.S.： 题目中的每句话都是有用的
 * 
 * 由于输出数组不算在空间复杂度内，那么我们可以将 L 或 R 数组用输出数组来计算。先把输出数组当作 L 数组来计算，然后再动态构造 R 数组得到结果。让我们来看看基于这个思想的算法。
 * 
 * 算法逻辑：
 * 1. 初始化一个数组 answer，作为传入数组的每个元素的前缀积的保存地
 * 2. 构造方式与之前相同，只是我们试图节省空间，先把  作为当前数组的 前缀积数组。
 * 3. 这种方法的唯一变化就是我们没有构造 后缀积 数组。而是用一个遍历来跟踪右边元素的乘积。并更新数组 answer[i]=answer[i]*Ranswer[i]=answer[i]∗R。然后 后缀积 更新为 R=R*nums[i]R=R∗nums[i]，其中变量 R 表示的就是索引右侧数字的乘积。
 */
/**
 * // java 代码
 * 
 * class Solution {
 *      public int[] productExceptSelf(int[] nums) {
 *          int length = nums.length;
 *          int[] answer = new int[length];
 *          // anawer[i]代表的是 nums[i] 元素的 前缀积
 *          // 因为索引为0，的元素左侧没有数据，所以 answer[0] = 1;
 *          for(int l = 1; i < length; i++) {
 *              anawer[i] = num[i-1] * anawer[i-1];
 *          }
 *          // R为后缀积
 *          // 刚开始最后一个元素没有后缀积
 *          int R = 1;
 *          for(int i = length -1; i >= 0; i--) {
 *              // 对于索引 i，左边的乘积为 answer[i]，右边的乘积为 R
 *              answer[i] = answer[i] * R;
 *              R *= nums[i];
 *          }
 *           return answer;
 *      }
 * }
 */
/**
 * 时间复杂度：O(N)O(N)，其中 NN 指的是数组 nums 的大小。分析与方法一相同。
 * 空间复杂度：O(1)O(1)，输出数组不算进空间复杂度中，因此我们只需要常数的空间存放变量。
 */