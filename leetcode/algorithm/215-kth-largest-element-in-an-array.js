/**
 * 215. 数组中的第K个最大元素
 * 
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */
/**
 * 思路： 先排序后获取，排序按照从大到小，这样获取的时候不需要轮询，直接返回就行
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b) => b-a); // 从大到小排序
    return nums[k-1]; // 因为数组是从0开始计数
};
/**
 * 只比一半的人快，肯定还有其他解法 (同样的代码别人能跑 5ms~~~)
 * 内存消耗～～～，有不用排序的解法么
 * 
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了57.15%的用户
 * 内存消耗：36 MB, 在所有 JavaScript 提交中击败了20.00%的用户
 */

 /**
  * 官方题解 基于堆排序的选择方法
  * 
  * 思路： 建立一个大根堆，做k -1 次删除操作后堆顶元素就是我们要找的答案
  * 
  * class Solution {
  *     public int findKthLargest(int[] name,int k) {
  *         int heapSize = name.length;
  *         buildMaxHeap(nums,heaoSize);
  *         for(int i = nums.length-1;i >= nums.length - k + 1; --i) {
  *             swap(nums,0,i);
  *             --heapSize;
  *             maxHeapify(nums, 0, heapSize);
  *         }
  *         return nums[0];
  *     }
  *     public void buildMaxHeap(int[] a,int heapSize) {
  *         for (int i = heapSize / 2; i >= 0; --i) {
  *             maxheapify(a, i, heapSize);
  *         }
  *     }
  *     public void maxHeapify(int[] a,int i,int heapSize) {
  *         int l = i * 2 + 1,r = i * 2 + 2,largest = i;
  *         if(l < heapSize && a[l] > a[largest]) {
  *             largest = l;
  *         }
  *         if(r < heapSize && a[r] > a[largest]) {
  *             largest = r;
  *         }
  *         if(largest != i) {
  *             swap(a,i,largest);
  *             maxHeapif(a,largest,heapSize);
  *         }
  *     }
  *     public void swap(int[] a,int i,int j) {
  *         int temp = a[i];
  *         a[i] = a[j];
  *         a[j] = temp;
  *     }
  * }
  */