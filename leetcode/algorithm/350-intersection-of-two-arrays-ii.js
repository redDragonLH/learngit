/**
 * 350. 两个数组的交集 II
 * 给定两个数组，编写一个函数来计算它们的交集。
 */
/**
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    console.log(nums1.length > nums2.length);
    
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    let map = new Map();
    nums2.forEach(e=> {
        let count = map.get(e)
        map.set(e,count?count+1:1);
    })
    let arr =[]
    nums1.forEach(e=> {
        let count = map.get(e)

        if(map.has(e)&& count){
            arr.push(e)
            map.set(e,count-1);
        }
    })
    return arr;
};
// console.log(intersect([4,9,5],[9,4,9,8,4]));
console.log(intersect([3,1,2],[1,1]));

/**
 * 平铺直叙
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了82.31%的用户
 * 内存消耗：35.7 MB, 在所有 JavaScript 提交中击败了37.50%的用户
 */