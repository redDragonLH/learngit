/**
 * 738. 单调递增的数字
 * 
 * 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
 * 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
 */

/**
 * 要考虑前后联系,
 * 
 * 暴力轮询,超出时间限制
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    while(N) {
        if(isMonotoneIncreasing(N)) {
            return N;
        }
        N--

    }
    return N;
};
const isMonotoneIncreasing =(num)=> {
    let str = num.toString();
    for (let i = 1; i < str.length; i++) {
        if(str[i]< str[i-1]) {
            return false;
        }
    }
    return true;
}
console.log(monotoneIncreasingDigits(605068545));
