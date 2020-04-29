/**
 * 1095. 山脉数组中查找目标值
 * 
 * （这是一个 交互式问题 ）PS： 啥意思
 * 给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index) 等于 target 最小 的下标 index 值。
 * 如果不存在这样的下标 index，就请返回 -1。
 * 
 * 何为山脉数组？如果数组 A 是一个山脉数组的话，那它满足如下条件：
 * 首先，A.length >= 3
 * 其次，在 0 < i < A.length - 1 条件下，存在 i 使得：
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 */
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * 
 * 感觉就是二分法～
 * 
 * 那么判断条件是什么呢
 * 
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    // 必须确定好判断条件，否则无法编写代码
    // 中间数有三种状态，但是数字可能有多个
    // 状态1， 中间数处在山脉的上升处，
    // 状态2，中间数在最高位
    // 状态3，中间数在下降处
            // 问题1， 怎么判断位置，或者说怎么简单的判断是否在是上升处
            // 思考： 如果中间数与 开始数进行判断，如果中间数比开始数大，有两个 情况，1. 中间数在上升态势，中间为有序数据，2， 中间数在下降态势，中间数据为半无序
            //       这时候如果target判断，如果比中间数小，那么也可能会是在左侧或者 右侧，比中间数大，也一样，所以每次必须确定是上升还是下降，但是好像也不保险
            // 不过判断态势还是对判断 target 有帮助，但是判断态势就得增加一次获取数据，比较烦
            
            // 思考2. 可以先把最高峰拿到，然后在以最高峰为中间点向两边进行二分法处理，但是这样还要多出一个循环获取最高峰，然后再去二分获取当前target 位置，多出了一个二分查找，很容易超出调用次数
};