/**
 * 290. 单词规律
 * 
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 */

/**
 * 这题测试用例能出到困难~~
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

};
var wordPattern = function(pattern, s) {
    const word2ch = new Map();
    const ch2word = new Map();
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    for (const [i, word] of words.entries()) {
        const ch = pattern[i];
        if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
            return false;
        }
        word2ch.set(word, ch);
        ch2word.set(ch, word);
    }
    return true;
};


/**
 * 第三方题解 ----
 * 
 * 这个想法挺好,如果字符串数据乱那获取的index就不对了,这样数字就不想等
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arrS = s.match(/\w+/g)
    let len = arrS.length
    if(pattern.length != arrS.length) return false
    let numPa = '', numS = ''
    for(let i=0; i<len; i++){
        numS += arrS.indexOf(arrS[i])
        numPa += pattern.indexOf(pattern[i])
    }
    return numS == numPa
};