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
