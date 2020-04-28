/**
 * 面试题56 - I. 数组中数字出现的次数
 * 
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
 */

 /**
  * 官方题解 
  * 
  * 异或方案，数学方法，没有搞懂
  * 
    * @param {number[]} nums
    * @return {number[]}
    */
var singleNumbers = function(nums) {
    let ret = 0;
    nums.map(n => ret ^= n );
    let div = 1;
    while((div & ret) === 0) {
        div <<= 1;
    }
    let a = b =0;
    for (let i = 0; i < nums.length; i++) {
        if(div & nums[i]) {
            a ^= nums[i];
        } else {
            b ^= nums[i];
        }
        
    }
    return [a,b];
};

console.log(singleNumbers([1,2,5,2]));
