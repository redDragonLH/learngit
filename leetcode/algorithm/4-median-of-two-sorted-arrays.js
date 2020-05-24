/**
 * 4. 寻找两个正序数组的中位数
 * 
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 */

/**
 * 为两个数组定义两个指针，起始为零，
 * 然后计算出两个数组的长度的和，这样就可以得出中位数的需要走过的长度，
 * 然后循环数组，每次判断指针指着的元素大小，小的+1，这样移动到 中位数走过的长度然后获取它，
 * 
 * 但是，写的问题太多~~各种判断
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let jo = (nums1.length + nums2.length) % 2;
    let mid = Math.floor((nums1.length + nums2.length) / 2);
    let n1 = n2 = 0;
    let isn = true;
    let num = 0;
    console.log(jo,mid);
    
    let getMid = (is,n1,n2,jo) => {
        console.log(is,n1,n2,jo,nums1[n1] + (nums1[n1+1] && nums1[n1+1]<nums2[n2] ? nums1[n1+1] : nums2[n2]));
        
        if(is) {
            return jo ? nums1[n1] : (nums1[n1] + (nums1[n1+1] && nums1[n1+1]<nums2[n2] ? nums1[n1+1] : nums2[n2] ))/2;
        }else {
            return jo ? nums2[n2] : (nums2[n2] + (nums2[n2+1] && nums1[n1]>nums2[n2+1] ? nums2[n2+1] : nums1[n1] ))/2;
        }
    };
    while (true) {
        console.log(n1,n2);
        if(nums1[n1] < nums2[n2]){
            isn = true;
            num++ 
            if(num === mid){return getMid(isn,n1,n2,jo)}
            n1++;
        } else {
            num++ 
            isn= false;
            if(num === mid){return getMid(isn,n1,n2,jo)}
            n2++;
        }

        if(n1+n2 === 10) {
            return false
        }
    }

};

// console.log(findMedianSortedArrays([1, 2],[3,4]));
console.log('f',findMedianSortedArrays([1, 3],[2]));
