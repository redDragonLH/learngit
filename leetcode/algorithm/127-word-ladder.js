/**
 * 127. 单词接龙
 * 
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 说明:
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 */

/**
 * 思路： 
 * 第一 建立检测方法，
 * 第二 建立转换方法（最短转换序列） 还是得把所有的转换序列遍历一遍，或者我们能直接知道最短转换路径？（可能还是得递归）
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let count = 99;
    if(beginWord.length === 1 )return 1;
    let init = complateDiff(beginWord, endWord)
    if(init || init === 0) return 0 + init;
    wordList.forEach(e => {
        if(complateDiff(beginWord, e)) {
            if(e === endWord){
                count = Math.min(count,1)
            }else {
                let obj = {};
                obj[e] = true;
                count = Math.min(count,recursive(e,wordList,obj,endWord,1))
            }
            
        }
    });
    return count;
};
let recursive = (tag,wordList,obj,end,c) => {
    if(tag === end) return c;
    let count = 0;
    wordList.forEach(e=> {
        if(!obj[e] && complateDiff(tag, e)) {
            obj[e] = true
            count = recursive(e,wordList,obj,end,c+1);
        }else {
            return null
        }
    })
    return count;
    
}
let complateDiff = (target,com) => {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
        if(target[i] !== com[i]) {
            if(++count>1) return false;
        }
    }
    return count ? true : false;
}
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]));


/**
 * 新一轮尝试
 * 
 * 失败,还得是动态规划
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) return 0;
    if(beginWord.length ===1 && beginWord.length === endWord.length) return 2
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < wordList.length; i++) {
        if(complateDiff(beginWord,wordList[i])){
            if(wordList[i] === endWord) return 2;
            result = linearSearch(wordList[i],endWord,wordList,[beginWord,wordList[i]])
        }
    }
    return result === Number.MAX_SAFE_INTEGER?0:result;
};

const linearSearch = (beginWord,endWord,wordList,result)=> {
    if(complateDiff(beginWord,endWord)) return result.length+1;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < wordList.length; i++) {
        if(!result.includes(wordList[i]) && complateDiff(beginWord,wordList[i])) {
            console.log(result,wordList[i], endWord)
            if(wordList[i] === endWord) return result.length+1;
            result.push(wordList[i])
            min = Math.min(min,linearSearch(wordList[i],endWord,wordList,result));

        }
        
    }
    return min;
}