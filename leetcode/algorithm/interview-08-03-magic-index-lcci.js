/**
 * 面试题 08.03. 魔术索引
 *
 * 魔术索引。 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，
 * 如果没有，则返回-1。若有多个魔术索引，返回索引值最小的一个。
 */

/**
 * 思路:暴力法肯定是可以的,从头算到尾
 *
 * 有个条件是 有序数组,那么我觉得可以使用二分法,在获取中位数时如果元素小于索引说明后半部分可能会有魔术索引,如果大于索引,因为时有序数组,那么后半部分必然没有魔术索引
 * 但是不管怎样前半部分没有办法排除
 * 还有就是在重复条件下没有办法使用通常的二分法,因为数据重复会造成造成误判
 * 所以比较像二分法的解法是先去二分轮询前半部分数组,如果返回 -1 再去轮询另一部分,因为重复数据原因,中位数大于索引的判断会有失误,不能使用
 * @param {number[]} nums
 * @return {number}
 */
// 一直有问题,边界条件处理漏洞过多
//
// var findMagicIndex = function (nums) {
//   let len = nums.length;
//   if (!len) return -1;
//     if(len <5) return getIndexFor(nums,len)
//   let start = 0;
//   let end = len - 1;

//   let mid = (end + start) >> 1;
//   number = Math.min(getIndex(start,mid-1,nums),nums[mid] < mid?getIndex(mid,end,nums):Number.MAX_SAFE_INTEGER);
//   return number === Number.MAX_SAFE_INTEGER? -1:number
// };
// const getIndex = (start,end,nums)=> {
//     console.log(start,end);
//     let number = Number.MAX_SAFE_INTEGER;
//     while (start <= end) {
//         let mid = (end + start) >> 1;

//         if (nums[mid] === mid) {
//       console.log(nums[mid], mid);

//           number = Math.min(number, mid);
//         }
//         if (nums[mid] > mid) {
//           end = mid - 1;
//         } else {
//           start = mid + 1;
//         }

//       }
//   return number;

// }
// const getIndexFor=(nums,len)=>{
//     for (let i = 0; i < len; i++) {
//         if (i ===nums[i]) {
//             return i
//         }
//     }
//     return -1;
// }

var findMagicIndex = function (nums) {
  let len = nums.length;
  let i = 0;
  while (i < len) {
    if (i === nums[i]) {
      return i;
    }
    if (i < nums[i]) {
      i = nums[i];
    } else {
      i += 1;
    }
  }
  return -1;
};
/**
 * 直接暴力法
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了23.85%的用户
 * 内存消耗：38.9 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */

/**
 * 后记
 * 此题目在《程序员面试金典》中是有两问的,第一问是在没有重复数据的情况下获取索引的,这种情况下是可以使用经典二分法获取元素的,
 * 第二问就是此题目,在完成第一问后的追加问题,其实这题是没有O(log n)解法的,这也是面试官的目的,具体实现代码是在第一问的基础上改还是跳出框架都无所谓了
 */
console.log(
  findMagicIndex([
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
  ])
);
