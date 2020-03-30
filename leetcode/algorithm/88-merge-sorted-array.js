/**
 * 88. 合并两个有序数组
 * 
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 * 
 * 说明:

 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 */

 /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let flag = 0;
  let len = nums1.length
  for (let i = 0; i < len; i++) {
   if (!Number.isNaN(nums2[flag]) && nums1[i] >= nums2[flag]) {
    nums1.splice(i,0,nums2[flag])
    
    nums1.splice(len,1)
    flag++;
   }
  }
  while(flag !== n) {
   nums1[m + flag] = nums2[flag];
   flag++;
  }
  return nums1;
};
// console.log(merge([ 1, 2, 3, 0, 0, 0 ], 3 ,[ 2, 5, 6 ], 3));

/**
 * 有两个插入删除操作，影响性能
 */

/**
 * 解法 1
 * 合并再排序法
 * 
 * java 代码
 * 
 * class Soution {
 *   public void merge(int[] nums1,int m,int[] nums2,n) {
 *     System.arraycopy(nums2,0,nums1,m,n);
 *     Arrays.sort(nums1);
 *   }
 * }
 */

 /**
  * 解法 2 双指针法/从前往后
  */
 /**
  * 问题：
  * 需要把输出数组的数据copy出一份
  * 
  */

  /**
   * 解法 3 三指针法/从后往前
   * 
   * 使用双指针从后往前覆盖输出数组的元素，然后使用 一个指针检查输出数组已经移动到哪个位置（感觉可以不用设置）
   * 
   * 没用第三个指针，用第三个的见官方题解
   */
  var mergeByPointer = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    
    for (let i = nums1.length -1 ; i >= 0 ; i--) {
      if(p1 > -1 && p2 > -1){
        if(nums1[p1] > nums2[p2]) {
          nums1[i] = nums1[p1];
          p1--;
        }else {
          nums1[i] = nums2[p2];
          p2--;
        }
      } else if(p1 > -1) {
        break; // nums1 剩下直接返回，因为不需要动了
      } else if(p2 > -1) {
        nums1[i] = nums2[p2];
        p2--;
      }
    }
  }
  console.log(mergeByPointer([ 1, 2, 3, 0, 0, 0 ], 3 ,[ 2, 5, 6 ], 3));