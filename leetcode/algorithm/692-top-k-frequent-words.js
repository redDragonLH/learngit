/**
 * 692. 前K个高频单词
 *
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 */

/**
 *
 * 先查次数,后排序,然后如果有次数相等的就用字典序排序,有点啰嗦
 *
 * 大顶堆啥的会不会好一点
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let obj = {};
  words.forEach((e) => {
    obj[e] ? obj[e]++ : (obj[e] = 1);
  });
  console.log(obj);
  let arr = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      arr.push([key, obj[key]]);
    }
  }
  arr.sort((a, b) => b[1] - a[1]);
  // 把次数相等的数据进行字典序排序

  //然后返回K大的值
};

/**
 * 分段进行字典序处理
 * @param {*} arr
 * @param {*} start
 * @param {*} end
 */
const dicSort = (arr, start, end) => {
  for (let i = start; i < end; i++) {
    const element = array[i];
  }
};
/**
 * 官方 哈希表+ 排序
 */
var topKFrequent = function (words, k) {
  const cnt = new Map();
  for (const word of words) {
    cnt.set(word, (cnt.get(word) || 0) + 1);
  }
  const rec = [];
  for (const entry of cnt.keys()) {
    rec.push(entry);
  }
  // 逻辑上是一样的,不过没想到排序还能这么写
  rec.sort((word1, word2) => {
    return cnt.get(word1) === cnt.get(word2)
      ? word1.localeCompare(word2)
      : cnt.get(word2) - cnt.get(word1);
  });
  return rec.slice(0, k);
};
