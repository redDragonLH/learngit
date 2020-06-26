/**
 * 139. 单词拆分
 * 
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 
 * 说明：
 * 拆分时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 */

/**
 * 把字典改造成key value 结构，然后轮询字符串看看到最后一个字时能否完全匹配字典
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(wordDict.length === 0) return false;
    let map = new Map();
    let min = max = wordDict[0].length;
    wordDict.forEach(i => {
        map.set(i,1);
        min = Math.min(min,i.length);
        max = Math.max(max,i.length)
    })
    console.log(map,min,max);
    
    let start = 0,step = 0,str='';
    let s_len = s.length;
    while(start + step <= s_len) {
        str += s[start + step];
        step++;
        if(step < min) {
            continue;
        }
        if (step > max) {
            return false;
        }
        if(map.has(str)) {
            start += step;
            step = 0;
            str = '';
        }
    }
    return start === s_len;
};

console.log(wordBreak("aaaaaaa",["aaaa","aaa"]))

/**
 * 额~~ 按照测试用例的构成，我这个无法解决字典内元素过于相似的问题，比如"aaaaaaa"["aaaa","aaa"]以及有部分相同的元素
 */

/**
 * 官方题解 动态规划
 * 
 * 
 * java 代码
 * 
 * public class Solution {
 *      public boolean wordBreak(String s,List<String> wordDict) {
 *          Set<String> wordDictSet = new HashSet(wordDict); // 转为对象
 *          boolean[] dp = new boolean[s.length() + 1]; // 初始化数组
 *          dp[0] = true;
 *          for (int i = 1; j <= s.length();i++) {
 *              for (int j = 0;j < i; j++) {
 *                  if(dp[i] && wordDictSet.contains(s.substring(j,i))) {
 *                      dp[i] = true;
 *                      break;
 *                  }
 *              }
 *          }
 *          return dp[s.length()];
 *      }
 * }
 */  