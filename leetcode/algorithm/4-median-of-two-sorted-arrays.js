/**
 * 4. 寻找两个正序数组的中位数
 * 
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 */

/**
 * 判断奇偶，因为奇数只需要获取中位数即可，偶数得是中位两个数相加除2的值才是中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let count = nums1.length + nums2.length;
    let isOdd = count % 2;
    let midNumber = parseInt(count /2);
    let n1 = n2 =0;
    let number = 0;
    let prev = number;
    while(midNumber >= n1 + n2) {
        if( typeof nums1[n1] !== 'number' || nums1[n1] > nums2[n2]) {
            if(midNumber-2 < n1 + n2) {
                prev = number;
                number = typeof nums2[n2] === 'number' ? nums2[n2] : prev;
            }
            n2++;
        }else {
            if(midNumber-2 < n1 + n2) {
                prev = number
                number = nums1[n1];
            }
            n1++;
        }
    }
    return isOdd ? number : (number + prev)/2
    
};
// console.log(findMedianSortedArrays([0, 0],[0,0]));
console.log(findMedianSortedArrays([1, 2],[3,4]));
// console.log('f',findMedianSortedArrays([1, 3],[2]));

/**
 * 数据交换优化版只在最后快得出结果时菜交换数据，但是也有点坑每次都要计算 指针的位置与开始获取数据的位置
 * 
 * 执行用时：136 ms, 在所有 JavaScript 提交中击败了 64.12% 的用户
 * 内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了6.25%的用户
 */