/**
 * 204. 计数质数
 * 
 * 统计所有小于非负整数 n 的质数的数量。
 */

/**
 * 质数是除了它本身和1之外无法整除的数字,这要是没有计算公式就得二次循环
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        if(isPrime(i))result++;
    }
    return result;
};
/**
 * 质数总是等于 6x-1 或者 6x+1，其中 x 是大于等于1的自然数。
 * 
 * 首先 6x 肯定不是质数，因为它能被 6 整除；其次 6x+2 肯定也不是质数，因为它还能被2整除；依次类推，
 * 6x+3 肯定能被 3 整除；6x+4 肯定能被 2 整除。那么，就只有 6x+1 和 6x+5 (即等同于6x-1) 可能是质数了。
 * 所以循环的步长可以设为 6，然后每次只判断 6 两侧的数即可
 */
const isPrime =(num)=> {
    if (num <= 3) {
        return num > 1;
    }
    // 不在6的倍数两侧的一定不是质数
    if (num % 6 != 1 && num % 6 != 5) {
        return false;
    }
    let sqrt = Math.sqrt(num);
    for (let i = 5; i <= sqrt; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
console.log(countPrimes(10));
/**
 * 
 * 效率感人
 * 
 * 执行用时：340 ms, 在所有 JavaScript 提交中击败了32.52%的用户
 * 内存消耗：38.4 MB, 在所有 JavaScript 提交中击败了76.16%的用户
 */

/**
 * 官方题解: 厄拉多塞筛法，简称埃氏筛。
 * 
 * 如果 x 是质数，那么大于 x 的 x 的倍数 2x,3x,… 一定不是质数.依据这个理论我们就可以在处理时对质数的2x,3x...进行处理,
 * 从前往后处理,这样当处理到一个数时,如果发现已经标记为合数,则直接跳过,质数则加一
 */

var countPrimes = function(n) {
    const arr = new Array(n).fill(1);
    let result =0;
    for (let i = 2; i < n; i++) {
        if(arr[i]) {
            result++;
            for (let j = i*i; j < n; j+=i) {
                arr[j]=0;
            }
        }        
    }
    return result;
}
/**
 * 速度翻番
 * 
 * 执行用时：140 ms, 在所有 JavaScript 提交中击败了70.75%的用户
 * 内存消耗：50.3 MB, 在所有 JavaScript 提交中击败了47.22%的用户
 */