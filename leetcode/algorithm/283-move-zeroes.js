/**
 * 283. 移动零
 * 
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if(!nums[i]) {
            let pos = getPos(nums,i+1,len)
            nums[i]=nums[pos];
            pos < len && (nums[pos] = 0);
        }
        
    }
    while(!nums[len-1]&& len>-1) {
        nums[len-1]=0;
        len--;
    }
};
const getPos= (arr,i,len)=> {
    while(!arr[i] && i<len) {
        i++
    }
    return i
}
console.log(moveZeroes([0,1,0,3,12]));
/**
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了23.70%的用户
 * 内存消耗：40 MB, 在所有 JavaScript 提交中击败了5.01%的用户
 */