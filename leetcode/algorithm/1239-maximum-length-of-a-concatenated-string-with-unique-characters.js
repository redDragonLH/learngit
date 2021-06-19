/**
 * 1239. 串联字符串的最大长度
 * 
 * 给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。
 * 
 * 请返回所有可行解 s 中最长长度。
 */

/**
 * 遍历喽、
 * 
 * 用二进制数表示该字符串的字符集合，二进制的第i位表示字符集合中含有第i个小写字母,(26个位)
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let ans = 0;
    const masks = [];
    // 处理字符数组，把字符都转变成二进制位
    for (const s of arr) {
        let mask = 0;
        for (let i = 0; i < s.length; ++i) {
            const ch = s[i].charCodeAt() - 'a'.charCodeAt();// 获取当前字符的位置数字，0-25
            // 把mask 所代表的二进制串右移ch位，也就是最低位是当前字符所应在的位置
            // 检查这个位是否为1， 1代表这个字符串已经有了这个字符，字符重复
            // & 按位与，二进制位上都是1 则返回1
            if (((mask >> ch) & 1) !== 0) { // 若 mask 已有 ch，则说明 s 含有重复字母，无法构成可行解
                mask = 0;
                break;
            }
            // 先把1左移 ch个位，然后让这个数与mask计算，返回新的数
            // |= 按位或，只要两边的数的对应的二进制位有一个是1则返回1
            mask |= 1 << ch; // 将 ch 加入 mask 中
        }
        if (mask > 0) {
            masks.push(mask);
        }
    }

    const backtrack = (masks, pos, mask) => {
        if (pos === masks.length) {
            // toString(2) 按照2进制将数字转为字符串，然后按照去掉零，计算1的数量
            ans = Math.max(ans, mask.toString(2).split('0').join('').length);
            return;
        }
        if ((mask & masks[pos]) === 0) { // mask 和 masks[pos] 无公共元素
            backtrack(masks, pos + 1, mask | masks[pos]);
        }
        backtrack(masks, pos + 1, mask);
    }

    backtrack(masks, 0, 0);
    return ans;
};