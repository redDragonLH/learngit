/**
 * 841. 钥匙和房间
 *
 * 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。
 * 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
 * 最初，除 0 号房间外的其余所有房间都被锁住。
 * 你可以自由地在房间之间来回走动。
 * 如果能进入每个房间返回 true，否则返回 false。
 */

/**
 * 也就是简单的搜索,如果能搜索到所有的房间,则可以认为通过
 *
 * 广度优先搜索
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let num = rooms.length;
  let visited = [true];
  let queue = [0];
  let count = 0;
  while (queue.length > 0) {
    count++;
    let pos = queue.shift();
    let current = rooms[pos];

    current.forEach((e) => {
      if (!visited[e]) { // 把检查和置为已搜索放到这里,然后就可以在开头计算正确的房间数,并且剪掉已经搜索过的位置
        visited[e] = true; // 已过搜索的位置置 true
        queue.push(e);
      }
    });
  }
  return count === num;
};
/**
 *
 * 优化版并没有在轮询中去掉逻辑,并且还增加了.但是在输出之前的的计算去掉了,所以应该还是有一定的优化的,但是 leetcode 服务器体现不出来
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了50.74%的用户
 * 内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了47.89%的用户
 */

/**
 * 深度优先搜索
 * 
 * 就是在处理数据的时候使用递归并且是从开头第一条,一条一条使用递归,单条线向下处理数据
 */