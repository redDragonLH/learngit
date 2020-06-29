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
 * 只比一半的人快，肯定还有其他解法 (同样的代码别人能跑 50ms~~~)
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
  *     public int findKthLargest(int[] nums,int k) {
  *         int heapSize = nums.length;
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

/**
 * 堆逻辑，从java转换而来 
 * @param {*} nums 
 * @param {*} k 
 */
 var findKthLargest = function(nums, k) {
    let heap = new heap();
    let heapSize = nums.length;
    heap.buildMaxHeap(nums,heapSize); // 首先是构建一个初始化的最大堆
    for (let i = heapSize-1; i >= heapSize - k + 1; i--) {
        // 把最大值交换到数组最后（固化已得的最大值）
        heap.swap(nums, 0, i);
        --heapSize; // 未排序数数量组减1
        heap.maxheapify(nums, 0, heapSize); // 在未排序数组元素里获取最大值
    }
    return nums[0];
};
/**
 * 最大堆排序所构建的是一个从大到小排列的数组，转换成二叉树后也应该是从大到小排列的
 * 
 * 使用的方法是循环与递归 交换元素位置
 */
class heap {
    buildMaxHeap(arr, heapSize) {
        // heapSize 是数组的长度，为什么要除2 呢，
        // 除2 应该是因为在 maxheapify 内会查找 * 2 后的元素然后与当前元素判断是否交换位置
        // (反正都是要交换，循环一半就得了？)
        for (let i = heapSize/2; i >= 0; i--) {
            // 再把数组传入到构成函数
            maxheapify(arr, i, heapSize);            
        }
    }
    // 这是怎么全部排序的，有点迷茫
    maxheapify(arr,i, heapSize) {
        // 1.父结点索引：(i-1)/2（这里计算机中的除以2，省略掉小数）
        // 2.左孩子索引：2*i+1
        // 3.右孩子索引：2*i+2

        // 这里是获取左右子节点，同时判断，找到最小值
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        let largest = i; // 创建新变量保存元素最大的下标
        // 找出当前三个元素内最大元素的下标
        // 没有超出数组，并且比当前元素大
        if(l < heapSize && arr[l] > a[largest]) {
            largest = l;
        }
        // 没有超出数组大小 并且比当前元素大
        if(r < heapSize && arr[r] > a[largest]) {
            largest = r;
        }
        // 不是i的话就交换数据
        // 处理数据
        if(largest != i) {
            // 交换数组内位置
            swap(arr, i, largest);
            // 递归处理交换完的数据
            // 最大值是 原元素，则不会触发，那么以后就算还有元素未处理也没办法处理了
            // 如果不是原元素则会按照翻倍的速度处理元素，很快就会到头
            this.maxheapify(arr, largest, heapSize);
        }
    }
    // 交换元素位置
    swap (arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}