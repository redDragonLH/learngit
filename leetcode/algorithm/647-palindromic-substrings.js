/**
 * 647. 回文子串
 * 
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 */

/**
 * n^2的逻辑,嵌套轮询是否有
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = len = s.length;
    for (let i = 0; i < len; i++) {
        let s = s[i];
        for (let j = i + 1; j < len; j++) {
            count += isPalindromic(s += s[j]);

        }

    }
    return count;
};
const isPalindromic = (s) => {
    let start = 0;
    let end = s.length - 1

    while (start > end) {
        if (s[start] !== s[end]) return 0;
        start++;
        end--;
    }
    return 1;
}
/**
 * 暴力不可取~~
 * 执行用时：744 ms, 在所有 JavaScript 提交中击败了8.51%的用户
 * 内存消耗：43.8 MB, 在所有 JavaScript 提交中击败了64.52%的用户
 */

/**
 * 官方题解 中心拓展
 * 
 * 最朴素方法就是枚举出所有的回文子串：
 *  * 枚举出所有的子串，然后判断这些子串是否是回文
 *  * 拓展每一个可能的回文中心，然后用两个指针分别向左右两边拓展，当两个指针指向的元素相同的时候就拓展，否则停止拓展
 * 
 */

var countSubstrings = function (s) {
    const n = s.length;
    let ans = 0;
    for (let i = 0; i < 2 * n - 1; ++i) {
        let l = i / 2, r = i / 2 + i % 2;
        while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            --l;
            ++r;
            ++ans;
        }
    }
    return ans;
};


/**
 * Manacher 算法
 */
var countSubstrings = function(s) {
    let n = s.length;
    let t = ['$', '#'];
    for (let i = 0; i < n; ++i) {
        t.push(s.charAt(i));
        t.push('#');
    }
    n = t.length;
    t.push('!');
    t = t.join('');

    const f = new Array(n);
    let iMax = 0, rMax = 0, ans = 0;
    for (let i = 1; i < n; ++i) {
        // 初始化 f[i]
        f[i] = i <= rMax ? Math.min(rMax - i + 1, f[2 * iMax - i]) : 1;
        // 中心拓展
        while (t.charAt(i + f[i]) == t.charAt(i - f[i])) {
            ++f[i];
        }
        // 动态维护 iMax 和 rMax
        if (i + f[i] - 1 > rMax) {
            iMax = i;
            rMax = i + f[i] - 1;
        }
        // 统计答案, 当前贡献为 (f[i] - 1) / 2 上取整
        ans += Math.floor(f[i] / 2);
    }

    return ans;
};
