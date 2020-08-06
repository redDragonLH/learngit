/**
 * 336. 回文对
 *
 * 给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。
 */

/**
 * 不知道双循环+ hash表可以解决问题不~
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const map = new Map();
  const array = [];
  // 元素的前后+元素 判断是否为回文
  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (j === i) continue;
      if (isPalindrome(words[i] + words[j])) {
        array.push([i, j]);
      }
      if (isPalindrome(words[j] + words[i])) {
        array.push([j, i]);
      }
    }
  }
  return array;
};

const isPalindrome = (str) => {
  console.log(str);
  let start = 0,
    end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
};
console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]));
console.log(palindromePairs(["bat", "tab", "cat"]));

/**
 * 暴力法竟然能通过,我是没想到的~~
 *
 * 执行用时：3836 ms, 在所有 JavaScript 提交中击败了15.49%的用户
 * 内存消耗：49.6 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */

/**
 * 枚举前后缀
 * 
 * 只要前缀后缀其中之一是回文串,那么在单词列表的取反中有能和另一个组成回文串,那么就能证明这两个是回文串
 * 
 */
// 社区优秀解法
var palindromePairs = function (words) {
  // 优化算法，基于哈希表保存单词列表的逆串
  // set用于结果去重

  function isPalindrome(str) {
    let i = 0,
      j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }
    return true;
  }

  let map = new Map();
  let set = new Set();
  let res = [];

  // 单词取反作为键，在单词列表中的索引为值
  words.forEach((word, index) => {
    map.set(Array.from(word).reverse().join(""), index);
  });

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    //循环单词内部~
    // 单词拆分为前缀子串和后缀子串
    for (let j = 0; j <= word.length; j++) {
      let left = word.substring(0, j); // 前缀
      let right = word.substring(j); // 后缀

      // 前缀子串回文，后缀子串的逆串是某个单词。下面map.get(right)!==i
      // 是防止word的后缀子串为word本身情况
      if (isPalindrome(left) && map.has(right) && map.get(right) != i) {
        const w = [map.get(right), i]; // left 是回文,那么只要单词串的取反等于right ,那么就能组成回文串 (right + left + right)

        // join()默认按照逗号","连接数组元素;因此不需要处理形如"1 23"和"12 3"这种情况
        const key = w.join();

        // 去重操作，即[i,j]不能重复
        if (!set.has(key)) {
          res.push(w);
          set.add(key);
        }
      }

      // 后缀字符串回文，前缀字符串的逆存在与单词表
      if (isPalindrome(right) && map.has(left) && map.get(left) != i) {
        const w = [i, map.get(left)]; // (left + right + left)
        const key = w.join();
        if (!set.has(key)) {
          res.push(w);
          set.add(key);
        }
      }
    }
  }

  return res;
};

/**
 * 为什么都是嵌套循环,暴力法要比枚举前后缀慢那么多
 * 
 * 可能的原因:
 * 1. 暴力法每个都要进行回文判断,而且是超大字符串
 * 2. 暴力法内部是有两个回文判断的,而且都必须进行
 * 3. 前缀法的回文判断较短,其他的判断都是get 和 has 操作,简单
 * 
 * 4. O(n^2 ✖️ m) > O(n ✖️ m^2)
 * 
 * 怎么感觉 在 n,m相差不大的情况下时间复杂度差不多,也就n 较多的情况下 枚举前后缀才会占点便宜,
 * 难道是枚举前后缀的剪枝比较好?
 * 
 * 
 */