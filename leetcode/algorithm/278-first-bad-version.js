/**
 * 278. 第一个错误的版本
 * 
 * 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
 * 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
 * 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 0, end = n;
        // 判断条件，难道两点想等也无法判断已经符合要求？或是相等的点符合的要求有问题？
        // 或是只判断小于导致循环提前终止？
        while (start <= end) {
            let mid = parseInt((end - start) / 2 + start); // 防止溢出
            let status = isBadVersion(mid);
            if (status) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
};


/**
 * 官方题解
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        // 判断条件和循环内逻辑联动，high 节点包含在内的话就不需要等于判断
        while(left<right){
            let mid = Math.floor((left+right)/2);
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid + 1;
            }
        }
        return left;
    };
};