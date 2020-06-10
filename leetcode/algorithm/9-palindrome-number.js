/**
 * 9.回文数
 * 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
/**
 * 直接，转为字符串，然后轮询判断
 * @param {number} x
 * @return {boolean}
 * 可以优化的点是 空和负数，负数不可能是回文数
 */
var isPalindrome = function(x) {
    if(x < 0) return false; // 新加判断，但是提升仅4ms
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
 * 逻辑已经很少了，为什么还是那么慢呢，难道while很慢么
 * 时间复杂度为 O(n)
 * 空间复杂度为 O(n)
 * 
 * 执行用时 :220 ms, 在所有 JavaScript 提交中击败了76.27%的用户
 * 内存消耗 :44.6 MB, 在所有 JavaScript 提交中击败了98.00%的用户
 */
/**
 * 官方题解：反转一半数字
 * 
 * 最简单的两个方案是1. 转字符串，然后轮询。2. 数字反转，然后对比
 * 但是方案1，需要额外空间，方案2 有数字溢出问题
 * 
 * 可以使用反转一半数字的方法，（我是想不到）
 * 
 * 算法：
 * 
 * 首先考虑临界情况
 *      1. 负数不能是回文数
 *      2， 个位是0的不可能是回文数
 * 
 * 反转后半部分数字
 *      1. 对原数字求10的 余数，然后再对原数除10，这样就把原数字的个位处理
 *      2， 然后在对求得的余数进行处理，得到的余数乘以相应的10的次方，需要从右往左递减，这样才能构建反转数
 *      3. 判断当前构建的反转数是否大于等于原数字除了那么多少10之后的数字，等于则是回文数，小于则不是
 */
/**
 * java 代码
 * 
 * class Solution {
 *      public boolean isPalindrome(int x) {
 *          // 特殊情况
 *          // 如上所述，当x<0时，x不是回文数
 *          // 同样的，如果最后一位是 0 ，为了使该数字为回文数
 *          // 则其第一位数字也应该是 0 
 *          // 只有 0 满足这一属性
 *          if(x < 0 || (x % 10 == 0 && x != 0)) {
 *              return false;
 *          }
 *          int revertedNumber = 0;
 *          while (x > revertedNumber) {
 *              revertedNumber = revertedNumber *10 + x %10;
 *              x /= 10;
 *          }
 *          // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
 *          // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
 *          // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
 *          return x == revertedNumber || x == revertedNumber / 10;
 *      }
 * }
 */