/**
 * 815. 公交路线
 *
 * 给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，第 i 辆公交车将会在上面循环行驶。
 * 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。
 * 现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。
 * 求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。
 */

/**
 * // 我觉得不需要重复公交线路吧
 *
 * 得先建图,要不然没办法知道从哪到哪
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    // 把以线路为维度转为以车站为维度,但是无法展示路线信息,需要配合原数据
  let nodes = {};
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
        nodes[routes[i][j]]
        ? nodes[routes[i][j]].push(i)
        : (nodes[routes[i][j]] = [i]);
    }
  }
  // 初始的路线
  const queue =[nodes[source]];
  let step = 0;
  let processed = new Set();
  while(queue.length) {
    step++;
    // 获取当前的路线
    let node = queue.unshift();
    processed.add(node)
    //检查当前路线的 站点
    for (let i = 0; i < routes[node]; i++) {
        // 如果有 target 则直接返回
        if(routes[node][i] === target) {
            return step;
        }else {
            // 太复杂~~~
            !processed.has(node[routes[node][i]]) && queue.push(...node[routes[node][i]])
        }
        
    }
  }
};
numBusesToDestination(
  [
    [1, 2, 7],
    [3, 6, 7],
  ],
  1,
  6
);
