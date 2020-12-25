/**
 * 387. 字符串中的第一个唯一字符
 * 
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const len = s.length;
    if(!len) return -1;
    if(len===1) return 0;
    let resObj ={};
    for (let i = 0; i < len; i++) {
        if(resObj[s[i]]) {
            resObj[s[i]]++
        }else resObj[s[i]]=1
    }
    for (const key in resObj) {
        if (Object.hasOwnProperty.call(object, key)) {
            if(object[key]===1) {
                return result
            }
            
        }
    }
    return -1;
};

/**
 * 官方题解
 */
var firstUniqChar = function(s) {
    const position = new Map();
    const q = [];
    const n = s.length;
    for (let [i, ch] of Array.from(s).entries()) {
        if (!position.has(ch)) {
            position.set(ch, i);
            q.push([s[i], i]);
        } else {
            position.set(ch, -1);
            while (q.length && position.get(q[0][0]) === -1) {
                q.shift();
            }
        }
    }
    return q.length ? q[0][1] : -1;
};

/**
 * 第三方优秀题解
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var arr = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    for(let i = 0; i < s.length; i++) {
        if(arr[s[i].charCodeAt() - 'a'.charCodeAt()] == 1) {
            return i;
        }
    }
    return -1;
};