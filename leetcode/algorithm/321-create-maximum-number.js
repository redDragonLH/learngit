/**
 * 321. 拼接最大数
 * 
 * 给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。
 * 求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。
 * 说明: 请尽可能地优化你算法的时间和空间复杂度。
 */

/**
 * 也就是两个数组从前往后扫描,选择最大的,然后保持相对位置,选过的数据之前的就不允许选择
 * 
 * 但是必须保证循环的时候不能减少到比k-当前位置小的数据
 * 
 * 最好是能合并到一个数组并且保持相对位置
 * 
 * 思路还行,写的好麻烦
 * 
 * 失败~~~~
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let len =  nums1.length + nums2.length;
    let nums1Pos = 0,nums2Pos= 0;
   
    let result = [];

    while(len>k-result.length){
        let num = nums1[nums1Pos];
        num = Math.max(num,nums1[++nums1Pos])
    }
};


/**
 * 就是把k分开,分两份,从相应数组拿去对应数的元素,然后归并排序
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let len =  nums1.length + nums2.length;
    let nums1Pos = 0,nums2Pos= 0;
   
    let result = [];

    while(len>k-result.length){
        let num = nums1[nums1Pos];
        num = Math.max(num,nums1[++nums1Pos])
    }
};


/**
 * 就是把k分开,分两份,从相应数组拿去对应数的元素,然后归并排序
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let nums1L = nums1.length,nums2L = nums2.length;
    let result = null;
    for (let i = 0; i <= k; i++) {
        if(nums1L >= i && nums2L >= k-i) {
            let num1A = getNumber(nums1,i)
            let num2A = getNumber(nums2,k-i)
            resultTemp = merge(num1A,num2A);
            // console.log(resultTemp,result)
            if(result) {
                result = compare(resultTemp,result)
            }else {
                result = resultTemp;
            }
            
        }
    }
    return result
};
const getNumber =(nums,count)=> {
    if(!count) return [];
    let len = nums.length;
    if(count === len) return nums;
    const arr = [];
    let pos = -1;
    count--;
    while(count > -1){
        let num = nums[pos+1]; ///????????
        for (let i = ++pos; i < len-count; i++) {
            if(num !== nums[i]) {
                num = Math.max(num,nums[i]);
                num === nums[i] && (pos = i);
            }
        }
        arr.push(num);
        count--;
    }
    return arr;
};
const merge = (arrA,arrB) => {
    let arr =[];
    console.log(arrA,arrB);
    while(arrA[0]>-1 && arrB[0]>-1) {
        if(arrA[0] === arrB[0]) {
            let len = arrA.length>arrB.length?arrA.length:arrB.length;
            for (let i = 1; i < len; i++) {
                if(typeof arrB[i] === 'undefined'  || arrA[i]>arrB[i]) {
                    arr.push(arrA.shift())
                    break;
                }else if(typeof arrA[i] === 'undefined' || arrA[i] < arrB[i]){
                    arr.push(arrB.shift())
                    break;
                }
            }
        }
        arr.push(arrA[0]> arrB[0]?arrA.shift():arrB.shift())
    }
    if(arrA.length) {
        arrA.map(a=> {
            arr.push(a)
        })
    }
    if(arrB.length) {
        arrB.map(a=> {
            arr.push(a)
        })
    }
    console.log('arr',arr);
    return arr
}
const compare = (arrA,arrB) => {
    let len = arrA.length
    for (let i = 0; i < len; i++) {
        if(arrA[i] > arrB[i]) {
            return arrA
        }else if(arrA[i] < arrB[i]) {
            return arrB
        }
    }
    return arrA;
}
console.log(
maxNumber([5,7,7,0,1,6,7,2,2,4,6,8,9,2,0,9,8,7,6,3,9,4,8,8,4,5,3,3,7,4,3,2,8,9,8,4,0,2,0,2,2,0,4,2,2,8,6,7,1,0,8,7,5,4,6,4,1,7,4,4,3,7,5,8,8,0,3,1,3,4,6,0,6,9,6,6,4,2,1,9,3,7,4,4,4,2,1,9,5,2,1,7,6,0,1,3,5,3,7,7],
    [8,3,7,8,6,9,1,5,5,0,5,2,8,7,8,3,3,7,9,2],
    100)
    );