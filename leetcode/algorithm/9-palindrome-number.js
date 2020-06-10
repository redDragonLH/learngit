/**
 * 9.回文数
 * 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
/**
 * 直接，转为字符串，然后轮询判断
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let start=0,end=str.length-1;
    while(start < end){
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
};
/**
 * 时间复杂度为 O(n)
 * 空间复杂度为 O(n)
 * 
 * 执行用时 :220 ms, 在所有 JavaScript 提交中击败了76.27%的用户
 * 内存消耗 :44.6 MB, 在所有 JavaScript 提交中击败了98.00%的用户
 */