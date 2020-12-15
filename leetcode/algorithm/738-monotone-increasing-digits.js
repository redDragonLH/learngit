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

/**
 * 理论上,如果前一个数据比另一个数据大,那么应该把前一个位减一,
 * 然后应该把后边所有的数字都应该置为9,这样这个数就是当前条件下最大的,还要向前比较,查看是否没问题,
 * 
 * 考虑从后往前处理
 * 
 * 从后往前处理就减少了从前往后方案的回退处理
 */
var monotoneIncreasingDigits = function(N) {
    let str = N.toString();
    let len = str.length-1;
    const arr = Array.from(str)
    let pos= len

    for (let i = len; i > 0; i-- ) {
        if(arr[i]< arr[i-1]) {
            arr[i-1] = Number(arr[i-1]) -1

            format(arr,i,pos)
            pos = i;
        }
    }
    return Number(arr.join(''));
};
const format=(arr,start,end)=> {
    while(start<= end) {
        arr[start]=9;
        start++;
    }
}
console.log(monotoneIncreasingDigits(605068545));
console.log(monotoneIncreasingDigits(332));
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了89.47%的用户
 * 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了26.32%的用户
 */