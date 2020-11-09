/**
 * 973. 最接近原点的 K 个点
 *
 * 我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。
 *（这里，平面上两点之间的距离是欧几里德距离。）
 * 你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。
 */

/**
 * 小根堆最方便
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var kClosest = function (points, K) {
  let powA = [];
  let result = [];
  points.map((a) => {
    powA.push(Math.pow(a[0], 2) + Math.pow(a[1], 2));
  });
  console.log("powA", powA);
  for (let i = 0; i < K; i++) {
    let min = Number.MAX_VALUE;
    let pos = -1;
    for (let j = 0; j < powA.length; j++) {
      if (powA[j] < min) {
        min = powA[j];
        pos = j;
      }
    }
    powA[pos] = Number.MAX_VALUE;
    result.push(points[pos]);
  }
  return result;
};

kClosest(
  [
    [1, 3],
    [-2, 2],
  ],
  1
);
/**
 * 够惨
 *
 * 执行用时：800 ms, 在所有 JavaScript 提交中击败了7.37%的用户
 * 内存消耗：47.9 MB, 在所有 JavaScript 提交中击败了52.69%的用户
 */
var kClosest = function (points, K) {
    return points.sort(
      (a, b) =>
        Math.pow(a[0], 2) +
        Math.pow(a[1], 2) -
        Math.pow(b[0], 2) -
        Math.pow(b[1], 2)
    ).slice(0,K);
  };
/**
 * 进一步压缩,潜力耗尽
 * 
 * 执行用时：204 ms, 在所有 JavaScript 提交中击败了89.47%的用户
 * 内存消耗：46.8 MB, 在所有 JavaScript 提交中击败了70.97%的用户
 */

 /**
  * 用小根堆还有点浪费,毕竟只是一次性的
  */