/**
 * 面试题 17.13. 恢复空格
 * 
 * 哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。
 * 像句子"I reset the computer. It still didn’t boot!"已经变成了"iresetthecomputeritstilldidntboot"。
 * 在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典dictionary，不过，有些词没在词典里。
 * 假设文章用sentence表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。
 * 注意：本题相对原题稍作改动，只需返回未识别的字符数
 * 
 * 提示：
 * 0 <= len(sentence) <= 1000
 * dictionary中总字符数不超过 150000。
 * 你可以认为dictionary和sentence中只包含小写字母。
 */

/**
 * 思路：。。。。。。应该是最好从后向前？也不行，单词是从前向后走的
 * 中间有未识别的字符，就很灵性～，没有思路，看看题解吧
 * 
 * 还是没有理解怎样用
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    let trie = getTrie(dictionary)
};
const getTrie = (dic) => {
    let obj = {}
    for (let i = 0; i < dic.length; i++) {
        head = obj
        for (let j = 0; j < dic[i].length; j++) {
            head[dic[i][j]] = head[dic[i][j]]? head[dic[i][j]]: {};
            head = head[dic[i][j]];
        }
    }
    console.log(obj);
    return obj;
}
dictionary = ["looked","just","like","her","brother"]
sentence = "jesslookedjustliketimherbrother"
console.log(respace(dictionary, sentence))

/**
 * 官方题解 字典树+ 动态规划
 * 
 * 动态规划思路： 
 * 1. 定义数组元素含义：考虑前i 个字符最少的未识别的字符数量，从前往后计算 dp 值。被字典识别的不会出现
 * 2. 数组元素转移公式：每次转移的时候考虑第j (j <= i)个到i个字符组成的子串 sentence[j−1⋯i−1]  是否能在字典中找到
 *      如果能找到的话，这个转移方程为dp[i] = min(dp[i],dp[j - 1])
 *      没有找到的话可以复用dp[i -1]的状态再加上当前未识别的第i个字符： dp[i] = dp[i-1]+1
 * 
 * class Solution {
 *      public int respace(String[] dictionary, String sentence) {
 *          int n = snetence.length();
 * 
 *          // 构建字典树
 *          Trie root = new Trie();
 *          for (String word: dictionary) {
 *              root.insert(word);
 *          }
 * 
 *          int[] dp = new int[n + 1];
 *          Arrays.fill(dp,Integer.MAX_VALUE); // 把数组内都填充为最大的安全数字
 *          dp[0] = 0;// 初始化第一个数字
 *          for(int i = 1; i <= n; ++i) { // 循环字符串
 *              dp[i] = dp[i-1] + 1; // 初始当前数组元素，默认未识别
 * 
 *              Trie curPos = root;
 *              for(int j = i; j >= 1; --j) {
 *                  int t = sentence.charAt(j-1) - 'a';
 *                  if(curPos.next[t] == null) {
 *                      break;
 *                  } else if(curPos.next[t].isEnd) {
 *                      dp[i] = Math.min(dp[i],dp[j - 1]);
 *                  }
 *                  if(dp[i] == 0) {
 *                      break;
 *                  }
 * 
 *                  curPos = curPos.next[t];
 *              }
 *          }
 *          return dp[n];
 *      }
 * }
 * 
 * class Trie {
 *      public Trie[] next;
 *      public boolean isEnd;
 *      public Trie() {
 *          next = new Trie[26];
 *          isEnd = false;
 *      }
 *      public void insert(String s) {
 *          Trie curPos = this;
 *          
 *          for(int i = s.length() - 1; i >= 0; --i) {
 *              int t = s.charAt(i) - 'a';
 *              if(curPos.next[t] == null) {
 *                  curPos.next[t] = new Trie();
 *              }
 *              curPos = curPos.next[t];
 *          }
 *          curPos.isEnd = true;
 *      }
 * }
 */