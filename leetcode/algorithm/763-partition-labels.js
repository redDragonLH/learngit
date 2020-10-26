/**
 * 763. 划分字母区间
 *
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 */

/**
 * 思路:
 * 一个字母只能在一个字符串里面,那么就必须判断,这个子串有哪些字符,保存下来,然后继续查找字符,在检查字符在哪个子串里
 *
 * 步骤
 *  1. 得知道当前字符串是否在已知字串里
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let result = [1];
  let strObj = {
    0: {},
  };
  strObj[0][S[0]] = true;

  for (let i = 1; i < S.length; i++) {
      const existPos = checkout(S[i], strObj, result);
    if (existPos===-1) {
        strObj[result.length]={} 
        strObj[result.length][S[i]] = true;
        result[result.length]=1
    } else {
        result[existPos]++;
        merge(strObj,result,existPos)
    }
  }
  return result;
};
const checkout = (str, obj, arr) => {
  if (!arr.length) return -1; // 结果数组为空,肯定不存在
  for (let i = 0; i < arr.length; i++) {
    // 轮训对象的属性,查看在哪里
    if (obj[i][str]) return i;
  }
  return -1;
};
const merge =(obj,arr,pos) => {
    let objArr = [];
    for (let i = arr.length-1; i > pos; i--) {
        arr[pos]+=arr.pop();
        objArr.push(obj[i])
        delete obj[i]
    }
    obj[pos] = Object.assign(obj[pos], ...objArr)

}
console.log(partitionLabels("ababcbacadefegdehijhklij"))

/**
 * 优化合并流程,越优化越慢~~
 * 
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了31.10%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了6.17%的用户
 */