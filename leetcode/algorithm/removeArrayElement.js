/**
 * 
 * 
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */
/**
 * 提交
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
 let length=0
 let len = nums.length
 for(let i=len;i>-1;i--){ // 从后往前，要不然数据变动会导致漏掉
     if(nums[i] !== val)length++ // 不等于则 =1;
     else nums.splice(i,1) // 等于则删除 --- 删除这个想法太耿直了，23333333
 }
 return length;
};

/** 
 * 其他思路 1
 * 
 * 双指针：快慢针
 * 
 * 思路： 使用快针进行循环，如果不等于则把快针指向的元素赋给慢针，并让慢针加一，循环完成后慢针的位置就是剩余数据的位置
 */

/**
 * 思路1 实现
 * 
 */
var removeElement2 = function(nums, val) {
 let l = 0;
 let len = nums.length
 for(let i=0;i< len;i++){
     if(nums[i] !== val){
      nums[l] = nums[i];
      l++
     }
 }
 return l;
};
console.log(removeElement2([0,1,2,2,3,0,4,2],2));

 /**
  * 这种问题其实没要求数组的内容，所以不必要删除，保证length正确以及数据位置从头开始排，使用替换是最好的
  * 
  */