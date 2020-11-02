/**
 * 349. 两个数组的交集
 * 
 * 给定两个数组，编写一个函数来计算它们的交集。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const resule = [];

    if(!nums1.length || !nums2.length) return resule;
    let nums1 = new Set(...nums1);
    let nums2 = new Set(...nums2);
    nums1.forEach((a)=> {if(nums2.has(a))resule.push(a) })
    return resule;
};
/**
 * 应该没必要进行数据格式的转换,indexof也就够了
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了32.78%的用户
 * 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了18.68%的用户
 */

/**
 * 不进行结构转换版
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const resule = [];
    if(!nums1.length || !nums2.length) return resule;
    nums1.forEach(a=> {
        if(nums2.includes(a)&& resule.includes(a)) resule.push(a);
    })
    return resule;
};
/**
 * 提高了8毫秒,还能再提么
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了63.99%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了27.63%的用户
 */

 /**
 * 进行预处理版
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const resule = [];
    if(!nums1.length || !nums2.length) return resule;
    const nums2o = {};
    nums2.forEach(a=> {
        nums2o[a]=true;
        
    })
    nums1.forEach(a=> {
        if(nums2o[a]){
            resule.push(a);
            nums2o[a]= false;
        };
    })
    return resule;
};
/**
 * 又提升了12毫秒,自带的方法运行也是要时间的
 * 
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了96.84%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了29.79%的用户
 */

/**
 * 
 * 第三方题解
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1=new Set(nums1)
    let res=[]
    for(let cur of nums2){
        if(set1.has(cur)){
            res.push(cur)
            set1.delete(cur)
        }
    }
    return res
};