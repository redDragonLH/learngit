/**
 * 844. 比较含退格的字符串
 *
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 */

/**
 * 从后往前处理,并且在处理时只标记字母
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare_one = function (S, T) {
  let Slen = S.length;
  let Tlen = T.length;
  const Sarr = new Array(Slen).fill(1);
  const Tarr = new Array(Tlen).fill(1);
  while (Slen >= 0 || Tlen >= 0) {
    if (Slen >= 0 && S[Slen] === "#") {
      Slen = markDel(S, Slen, 0, Sarr);
    } else {
      Slen--;
    }
    if (Tlen >= 0 && T[Tlen] === "#") {
      Tlen = markDel(T, Tlen, 0, Tarr);
    } else {
      Tlen--;
    }
  }
  let sresult = "";
  let tresult = "";
  for (let i = 0; i < Sarr.length; i++) {
    if (Sarr[i]) sresult += S[i];
  }
  for (let i = 0; i < Tarr.length; i++) {
    if (Tarr[i]) tresult += T[i];
  }
  return sresult === tresult;
};
const markDel = (str, pos, count = 0, markArr) => {
  if (str[pos] === "#") {
    markArr[pos] = 0;
    return markDel(str, --pos, ++count, markArr);
  } else if (count) {
    markArr[pos] = 0;
    return markDel(str, --pos, --count, markArr);
  }
  if (!count && str[pos] !== "#") return pos;
};

/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了46.85%的用户
 * 内存消耗：40.7 MB, 在所有 JavaScript 提交中击败了5.27%的用户
 */

/**
 * 原地删除方案
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const match=(str) => {
        if(/^#/.test(str)) str= str.replace(/^#/,'')
        str = str.replace(/\w#/g,'')
        return str;
    }

    while (/#/g.test(S) || /#/g.test(T)) {
        /#/g.test(S) && (S = match(S));
        /#/g.test(T) && (T = match(T));
    }
    return S===T;
};
console.log(backspaceCompare("#ab#c", "ad#c"));
/**
 * 虽然每次循环都会有字符串生成操作,但是还是比我自己写的快,应该是次数不多
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了80.41%的用户
 * 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了13.05%的用户
 */

/**
 * 第三方题解 表现优异
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function getStr(str) {
    let statck = []
    for (let val of str) { // 是 # 不仅不往里放还要退出来一个
        if (val === '#') {
            statck.pop()
        } else {
            statck.push(val)
        }
    }
    return statck
}
var backspaceCompare = function (S, T) {
    if (S === T) {
        return true
    }
    let str1 = getStr(S).join(''), str2 = getStr(T).join('')
    return str1 === str2
};