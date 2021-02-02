/**
 * 424. 替换后的最长重复字符
 * 
 * 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。
 * 注意：字符串长度 和 k 不会超过 104。
 */

/**
 * 双指针法
 * 
 * 枚举字符串中的  每一个位置  作为  右端点 ,然后找到其最远的左端点的位置,满足该区间内除了出现次数最多的那一类字符之外,剩余的字符(即非最长重读字符)数量不超过K个
 */

var characterReplacement = function(s, k) {
    const num = new Array(26).fill(0);
    const n = s.length;
    let maxn = 0, left = 0, right = 0;

    // 右节点一直移动
    while (right < n) {
        num[s[right].charCodeAt() - 'A'.charCodeAt()]++;
        maxn = Math.max(maxn, num[s[right].charCodeAt() - 'A'.charCodeAt()])
        if (right - left + 1 - maxn > k) {
            num[s[left].charCodeAt() - 'A'.charCodeAt()]--;
            left++;
        }
        right++;
    }
    return right - left;
};
