/**
 * 514. 自由之路
 *
 * 视频游戏“辐射4”中，任务“通向自由”要求玩家到达名为“Freedom Trail Ring”的金属表盘，并使用表盘拼写特定关键词才能开门。
 * 给定一个字符串 ring，表示刻在外环上的编码；给定另一个字符串 key，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的最少步数。
 * 最初，ring 的第一个字符与12:00方向对齐。您需要顺时针或逆时针旋转 ring 以使 key 的一个字符在 12:00 方向对齐，然后按下中心按钮，以此逐个拼写完 key 中的所有字符。
 * 旋转 ring 拼出 key 字符 key[i] 的阶段中：
 * 您可以将 ring 顺时针或逆时针旋转一个位置，计为1步。旋转的最终目的是将字符串 ring 的一个字符与 12:00 方向对齐，并且这个字符必须等于字符 key[i] 。
 * 如果字符 key[i] 已经对齐到12:00方向，您需要按下中心按钮进行拼写，这也将算作 1 步。按完之后，您可以开始拼写 key 的下一个字符（下一阶段）, 直至完成所有拼写。
 */

/**
 *
 * 有一个向两边搜索的方法,确定步数与位置
 *
 * 不对,最少步数,需要对当前进行整个数据进行覆盖查询,而且必须考虑环的数据形态~
 *
 * 动态规划?
 * 
 * 算是深度优先搜索
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  const len = ring.length;
//   if (ring === key) return len * 2 - 1;
  const obj = getRingData(ring, len); // 这样直接循环key获取位置
  let fist = obj[ring[0]][0];
  let pos = 0;
  if (ring[0] === key[0]) pos = 1; // 两个字符串头数据相等则直接下一个并给步骤加一
  return getPos(obj, key, pos, pos, fist);
};
/**
 * 深度遍历每个字符,没有剪枝,导致无用循环太多,
 * 没有剪枝会导致循环的特别多到死循环~~~
 * @param {string} ring 
 * @param {string} key 
 * @param {number} keyP 当前key字符串的位置
 * @param {number} pos 已经走过的步骤
 * @param {Ringitem} prev 
 */
const getPos = (ring, key, keyP, pos, prev) => {
  if (keyP === key.length) return pos;
  console.log(keyP,key.length);

  let result = [];
  if (ring[key[keyP]]) {
    let i = 0;
    ring[key[keyP]].map((e) => {
        // 字符相等,得出的旋转数为0
      if (key[keyP] === key[keyP-1] || e.pos !== prev.pos) {// 这个判断好像有点问题
        // 这里有点没想明白
        // 两个字符的位置相减的绝对值是两个字符在字符串上的距离
        // 上一个字符的的 befer 与当前字符 after 距离 是另一半的距离
        // 上一个字符的的 after 与当前字符 befer 距离 有问题~~~
        let epos = Math.min(Math.abs(prev.pos - e.pos), e.after + prev.befer+1, e.befer + prev.after+1);
        // console.log(keyP,'e:', e, 'prev:',prev, pos, epos);
        result[i++] = getPos(ring, key, keyP + 1, epos + pos + 1, e);
      }
    });
  }
//   console.log("result", result);
  return Math.min(...result); // 最小数
};
/**
 * 可不可以先处理ring
 * 先处理ring字符,这样在查找位置时不至于一次又一次循环
 */
const getRingData = (ring, len) => {
  const ringO = {};
  for (let i = 0; i < len; i++) {
    if (!ringO[ring[i]]) {
      ringO[ring[i]] = [new Ringitem(i, i, len - i-1)];
    } else {
      ringO[ring[i]] = [...ringO[ring[i]], new Ringitem(i, i, len - i-1)];
    }
  }
  return ringO;
};
class Ringitem {
  constructor(pos, befer, after) {
    this.pos = pos;
    this.befer = befer;
    this.after = after;
  }
}
// console.log(findRotateSteps("godding","godding"),13);
// console.log(findRotateSteps("abcde", "ade"),6);
// console.log(findRotateSteps("aaaaa", "aaaaa"),5);
// console.log(findRotateSteps("pqwcx", "cpqwx"),13);
console.log(findRotateSteps("caotmcaataijjxi", "oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx"),137); // 超时~~~