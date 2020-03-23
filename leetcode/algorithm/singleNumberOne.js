/**
 * 136. 只出现一次的数字
 * 
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

/**
 * 算是哈希表版本
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
 let numO = {

 };
 let num = 0;
 for (let i = 0; i < nums.length; i++) {
   if(numO[nums[i]]){
    numO[nums[i]] += 1
   } else {
    numO[nums[i]] = 1
   }
  
 }
 Object.keys(numO).forEach(e => {
  if(numO[e] == 1) num = e;
 })
 return num;
};
// console.log(singleNumber([4,1,2,1,2]));

/**
 * 题解
 * 
 * 列表操作法
 * 
 * 注： 还没我自己的哈希表版本运行快，应该是数组操作做的太多了，
 *      内存也才少了 0.5M~~
 */
var singleNumberBylist = function(nums) {
 let list = []
 for (let i = 0; i < nums.length; i++) {
  let pos = list.indexOf(nums[i])
  if(pos> -1 ){
   list.splice(pos, 1)
  } else {
   list.push(nums[i])
  }
 }
 return list[0];
}
/**
 * 列表法 复杂度
 * 
 * 时间复杂度：O(n^2)，遍历数组花费 O(n)，还要在列表中遍历判断是否存在这个数据,花费 O(n)
 * 空间复杂度： O(n),需要一个大小位 n 的列表保存所有的 nums 中元素
 */

 /**
  * 题解 2
  * 
  * 数学法
  * 
  * 概念： 2 * (a + b + c) - (a + a + b + b + c) = c
  * 
  * 
  * 注： 速度不错
  */

 var singleNumberByMath = function(nums) {
  let sum = 0
  nums.forEach(i => {
   sum += i
  })
  let setSum = 0;
  new Set(nums).forEach(i => {
   setSum += i;
  })

  return 2 * setSum - sum;
 }
 console.log(singleNumberByMath([4,1,2,1,2]));
 