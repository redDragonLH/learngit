/**
 * 785. 判断二分图
 *
 * 给定一个无向图graph，当这个图为二分图时返回true。
 * 如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。
 * graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。每个节点都是一个在0到graph.length-1之间的整数。这图中没有自环和平行边： graph[i] 中不存在i，并且graph[i]中没有重复的值。
 */

/**
 * 前置知识
 *      二分图：设G=(V,E)是一个无向图，如果顶点V可以分为互不相交的子集(A,B)，并且图中的每条边(i,j)所关联额两个顶点i和j分别属于这两个不同的顶点集(i in B,j in A)、
 *      二分图的判断： 染色法，只用黑白两种颜色，尝试能不能使所有的点都染上了色，而且相邻两个点的颜色不同
 *      二分图判断可用 DFS，BFS两种方式实现
 *
 * 思路： 是否有思路咧：
 *      待解决问题： 怎么判断相邻两个点颜色不同，怎样在二维数组里面确定相邻
 *          想法： 使用临接表的话就可以先染色然后再去判断相邻的节点是否都是相反的颜色
 *
 * @param {number[][]} graph 临接表，每个表里保存的是当前元素与与之相邻的所有节点
 * @return {boolean}
 *
 * 废弃版
 */
var isBipartite = function (graph) {
  const len = graph.length;
  if (!len) return false;
  let graphTable = new Array(len);
  graphTable[0] = true;
  // 染色逻辑 首先把顶点初始化为一个值，然后循环它的临接表，如果临接表里的元素已经染色则判断是否是相反，如果没染色则染为相反色
  for (let i = 0; i < len; i++) {
    // 不能直接在这里赋值，需要在判断临接表之后赋值
    // if(graphTable[i] === undefined) graphTable[i] = true; // 初始化未获取的元素，
    let flag = !graphTable[i];
    for (let j = 0; j < graph[i].length; j++) {
      if (
        graphTable[i] === undefined &&
        graphTable[graph[i][j]] !== undefined
      ) {
        graphTable[i] = !graphTable[graph[i][j]];
        flag = !graphTable[i];
      }
      if (graphTable[graph[i][j]] === undefined) {
        graphTable[graph[i][j]] = flag;
      } else {
        if (graphTable[graph[i][j]] !== flag) {
          return false;
        }
      }
    }
  }
  return true;
};
/* ---------废弃 end -------------*/

/**
 * 超出时间限制～～
 * 原理明白了，代码写的太垃圾
 * @param {*} graph 
 */

var isBipartite = function (graph) {
  const len = graph.length;
  if (!len) return false;
  let graphTable = new Array(len);
  graphTable[0] = 1;
  // 染色逻辑 首先把顶点初始化为一个值，然后循环它的临接表，如果临接表里的元素已经染色则判断是否是相反，如果没染色则染为相反色
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (graphTable[i] && graphTable[graph[i][j]] === graphTable[i]) {
        return false; // 一条线上的点颜色相同，不是二向图
      } else if (!graphTable[i] && graphTable[graph[i][j]]) { // 若干当前元素未染色，查找是否有已染色的临接点进行染色
        graphTable[i] = -graphTable[graph[i][j]];
        if (j > 0) { // 如果临接表前方有未染色的点，返回染色// 争取让所有轮询过的点都染色
          let linj = j;
          while (j > 0) {
            linj--;
            graphTable[graph[i][linj]] = -graphTable[i];
          }
        }
      }
    }
  }
  return true;
};
console.log(
  isBipartite([
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ])
);
console.log(isBipartite([[1], [0, 3], [3], [1, 2]]))
