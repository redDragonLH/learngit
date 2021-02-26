/**
 * 1178. 猜字谜
 * 
 * 外国友人仿照中国字谜设计了一个英文版猜字谜小游戏，请你来猜猜看吧。
 * 
 * 字谜的迷面 puzzle 按字符串形式给出，如果一个单词 word 符合下面两个条件，那么它就可以算作谜底：
 *      1. 单词 word 中包含谜面 puzzle 的第一个字母。
 *      2. 单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
 * 例如，如果字谜的谜面是 "abcdefg"，那么可以作为谜底的单词有 "faced", "cabbage", 和 "baggage"；而 "beefed"（不含字母 "a"）以及 "based"（其中的 "s" 没有出现在谜面中）。
 * 返回一个答案数组 answer，数组中的每个元素 answer[i] 是在给出的单词列表 words 中可以作为字谜迷面 puzzles[i] 所对应的谜底的单词数目。
 */

/**
 * 
 * 直接一点的原理就是处理单词和谜面按照规则单独获取第一个字母,然后每个谜底单词和谜面单词用数组统计有哪几种字母,然后嵌套循环匹配
 * 
 * 但是这样做内存使用超标,处理程序过长了吧
 * 
 * 也可以把两边单词都去重排序,拼接成字符串,这样匹配的时候会好很多,也不行,是包含关系,不是相等关系
 * 
 * 也可以使用集合把word 里面的字符串分类,然后轮训 puzzle 内的单词,与处理过的word集合匹配
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {

};