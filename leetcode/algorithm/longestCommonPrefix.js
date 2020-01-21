/**
 * 题目：  最长公共前缀
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 说明:
 *    所有输入只包含小写字母 a-z 。
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 let str = ''

   if(strs.length === 1) {
    return strs[0]
   }else if(strs.length === 0) {
    return str;
   }
   for (let i = 0; i < strs.length; i++) {
     for (let j = 0; j < strs.length; j++) {
       if(null){}
      
     }
    
   }
   return str;
};


/**
 * 其他思路：1 链表
 * 
 * 思路：
 * 1. 当字符串数组长度为0 时则公共前缀为空，直接返回
 * 2. 令最长公共前缀 ans 的值为第一个字符串，进行初始化
 * 3. 遍历后面的字符串，依次将其与ans 进行比较。两两找出公共前缀，最终结果即为最长公共前缀 ？
 * 4. 如果查找过程中出现了 ans 为空的情况，则公共前缀不存在直接返回
 * 5. 时间复杂度：O（s）,S为所有字符串的长度之和
 */
/**
 * 思路1 js 实现
 */
let longestCommonPrefix_2 = (strs) => {
  if (strs.length === 0) return '';
  let ans = strs[0]; // 获取第一个字符串
  for (let i = 0; i < strs.length; i++) { // 循环数组
    let j = 0;
    // 开始让默认的公共子串与其他元素进行比对
    // 如果有不想等的字符直接跳出循环
    for (;j< ans.length && j< strs[i].length; j++) {
      // 公共子串的第 j 个字符 与当前循环的数组元素的j个字符比较
      if(ans[j] != strs[i][j])
        break;
    }
    // 循环完之后 j 就是相等的字符的数量
    // 从公共子串里面截出相应的字符
    ans = ans.substr(0, j);
    // 为空就直接返回空
    if(ans === "")
      return ans;
  }
  // 返回
  return ans;
}
/**
 * 思路1 java 代码
 * 
 * class Solution {
 *    public String longestCommonPrefix(String[] strs) {
 *        if (strs.length == 0) return '';
 *        String ans = strs[0];
 *        for (int i = 1;i < strs.length;i++) {
 *            int j = 0;
 *            for(;j < ans.length() && j < strs[i].length();j++) {
 *                if(ans.charAt(j) != strs[i].charAt(j))
 *                    break;
 *            }
 *            ans = ans.substring(0, j);
 *            if (ans.equals(""))
 *              return ans;
 *        }
 *        return ans;
 *    }
 * }
 */

 /**
  * leet code 官方
  * 
  * 思路 2： 水平扫描法
  * 
  * 算法一：
  * 
  *   首先，将描述一种查找一组字符串的最长公共前缀 LCP(S1...Sn)的简单方法
  *     公式： LCP(S1...Sn) = LCP(LCP(LCP(S1,S2),S3),...Sn)
  * 
  * 算法：
  *   依照上文思路，算法要依次遍历字符串[S1...Sn],当遍历到第 i 个字符串的时候，找到最长公共前缀：LCP(S1..Si)。
  *     当LCP(S1...Si)是一个空串的时候，算法就结束。否则，在执行了 n 次遍历之后，算法就会返回最终答案LCP(S1...Sn)
  * 
  * 复杂度分析：
  * 
  *   * 时间复杂度：O(S),S是所有字符串中字符数量的总和
  *       最坏的情况下，n个字符串都是相同的。算法会将S1与其他字符串[S1..Sn] 都做一次比较
  *   * 空间复杂度：O(1) 只需要使用常数级别的额外空间
  */
/**
 * 思路2 java 代码
 * 
 * class Solution {
 *    public String longestCommonPrefix(String[] strs) {
 *      if(strs.length == 0) return '';
 *      String prefix = strs[0];
 *      for(int i = 1; i < strs.length; i++){
 *        while (strs[i].indexOf != 0) {
 *          prefix = prefix.substring(0, prefix.length() -1);
 *          if(prefix.isEmpty()) return '';
 *        }
 *      }
 *      return prefix;
 *    }
 * }
 */
/**
  * leet code 官方
  * 
  * 思路 2： 水平扫描
  * 算法二：
  * 
  * 算法逻辑：
  *   从前往后枚举字符串得每一列，先比较每个字符串相同列上的字符，然后再进行对下一列得比较
  * 
  * java 代码
  * 
  * class Solution {
  *   public String longsetCommonPrefix (String[] strs) {
  *     if (strs == null || strs.length == 0) return '';
  *     for (int i = 0; i < strs[0].length(); i++) { // 循环第一个元素的所有字符
  *       char c = strs[0].charAt(i);
  *       // 循环数组 但是比对的是元素的当前字符，每层比对完进入到下一层
  *       // strs = ['aaa','aac','aab'];
  *       // 第一层 第二层 第三层
  *       // a      a     a
  *       // a      a     c
  *       // a      a     b
  *       for (int j = 1; j < strs.lenght; j++) {
  *         if (i == strs[j].length() || strs[j].charAt(i) != c)
  *           return strs[0].substring(0,i);
  *       }
  *     }
  *     return strs[0];
  *   }
  * }
 */
/**
 * leetcode 官方
 * 
 * 思路三： 分治
 * 
 * 思路：
 *    来自于LCP操作的结合律。
 *    我们可以发现：
 *      LCP(S1...Sn) = LCP(LCP(S1...Sk),LCP(Sk+1...Sn))
 *      其中 LCP(S1...Sn) 是字符串[S1...Sn]的最长公共前缀，1 < k < n。
 * 
 * 算法：
 *  使用分治技巧，将原问题LCP(Si...Sj) 分成两个子问题（Si...Smid）与LCP(Smid+1， Sj),
 *  其中mid = (i + j)/2 。用子问题的解lcpLeft与 lcpRight构造原问题的解 LCP(Si...Sj).
 *  从头到尾挨个比较 lcpLeft 与 lcpRight 中的字符，直到不能再匹配为止。计算所得的 lcpLeft与 lcpRight 最长公共前缀就是原问题的解LCP(Si...Sj)
 * 
 * 复杂度分析：
 * 
 * 
 * java 代码:
 * 
 * class Solution {
 *    public String longestCommonPrefix(String[] strs) {
 *      if (strs == null || strs.length == 0) return ""
 *      return longestCommonPrefix(strs, 0, strs.length -1);
 *    }
 *    // 递归分析
 *    private String longestCommonPrefix(String[] strs,int l, int r) {
 *      if (l == r) {
 *        return strs[l];
 *      } else {
 *        int mid = (l + r)/2;
 *        String lcpLeft = longestCommonPrefix(strs, l, mid);
 *        String lcpRigh = longestCommonPrefix(strs, mid + 1, r);
 *        return commonprefix(lcpfix,lcpRighr);
 *      }
 *    }
 *    String commonPrefix(String left, String right) {
 *      int min = Math.min(left.length(), right.length());
 *      for (int i = 0; i< min; i++) {
 *        if (left.charAt(i) != right.charAt(i)) {
 *          return left.substring(0, i);
 *        }
 *      }
 *      return left.substring(0, min);
 *    }
 * }
*/