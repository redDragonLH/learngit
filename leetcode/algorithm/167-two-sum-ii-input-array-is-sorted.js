/**
 * 167 两数之和 II 输入有序数组
 *
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 */
/**
 * 题解： 老办法
 * 循环，并且用目标值减去当前值，然后判断是否有值等于这个差值，有则有数字相加等于目标值，没有则说明没有两个数字相加等于目标值
 *
 * 注： 升序排列的有序数组： 这个说明只能让我理解为如有 数字大于9，则后边的不需要再遍历
 */
/**
 * 注意返回的数组里的值是传入数组的下标，但是是从1 开始计算
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let tag = [];
  let obj = {}
  for (let i = 0; i < numbers.length; i++) {
    // if (numbers[i] > 0 && numbers[i] > target) return tag;
    let str = obj[numbers[i].toString()]
    if( str!== undefined) {
      return [str,i + 1]
    } else {
      obj[target - numbers[i]] = i + 1
    }
  }
  return tag;
};
// let arr = [2, 7, 11, 15];
// let arr =[2,3,4]; let tagn = 6;
let arr =[-1,0]; let tagn = -1;

console.log(twoSum(arr,tagn));
/**
 * 执行用时：60 ms 超过92.64% 的提交
 * 内存消耗：35.5 MB 超过 29.79% 的提交
 * 
 * 时间复杂的: O(n) 循环遍历整个表
 * 空间复杂度： O(n) 需要额外的 对象存放每个元素计算出来的数据
 */