/**
 * 242. 有效的字母异位词
 * 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 */

/**
 * 自己写也就这思路了吧
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join() === t.split('').sort().join();
};

/**
 * 果然，使用字母表判断当前数据
 * 
 * 不过思路是挺好的
 * 
 * 遍历两个字符串，遍历s 在字母表加一,遍历t在字母表减一，最后字母表所有元素为0则相等（也可在判断时检查字母表元素是否小于一）
 * 
 */
