/**
 * 395. 至少有K个重复字符的最长子串
 * 
 * 找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。
 */

/**
 * 还是一个窗口问题，找到窗口位置，两个端点
 * 
 * 但是这个判断很麻烦，左端点什么时候才应该移动~~
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {

};

/**
 * 官方题解： 分治法
 * 
 * 理论基础： 对于字符串s，如果存在某个字符ch,它的出现次数大于0且小于k，则任何包含ch的字串都不可能满足要求。
 * 也就是说，我们将字符串按照 ch 切分成若干段，则满足要求的最长子串一定出现在某个被切分的段内，
 * 而不能跨域一个或多个段。
 * 
 * 因此可以考虑分治的方式求解本题
 * 
 * 怎样分段才能符合理论基础的描述
 */
var longestSubstring = function(s, k) {
    const n = s.length;
    return dfs(s, 0, n - 1, k);
}
// 这个递归的逻辑先处理数据，然后在倒数位置从最少数字符串往回返数据进行判断
const dfs = (s, l, r, k) => {
    const cnt = new Array(26).fill(0); // 字母表
    for (let i = l; i <= r; i++) {
        cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++; // 字母转数字
    }

    let split = 0;
    for (let i = 0; i < 26; i++) {
        // 检查条件不够的字符串
        if (cnt[i] > 0 && cnt[i] < k) {
            // 返回由指定的 UTF-16 代码单元序列创建的字符串。
            // 细节点： 由数字码转为字母
            split = String.fromCharCode(i + 'a'.charCodeAt());
            // break 是为了只获取第一个有问题的字符
            break;
        }
    }
    if (split == 0) {
        return r - l + 1;
    }

    let i = l;
    let ret = 0;
    // 左端点往右端点动
    while (i <= r) {
        while (i <= r && s[i] === split) {
            i++;
        }
        // 循环停止位
        if (i > r) {
            break;
        }
        let start = i;
        while (i <= r && s[i] !== split) {
            i++;
        }
        // 这个循环是为了一次性跳过上边获取到的有问题字符串
        const length = dfs(s, start, i - 1, k);
        ret = Math.max(ret, length);
    }
    return ret;
};