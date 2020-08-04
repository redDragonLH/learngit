/**
 * 207. 课程表
 *
 * 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。
 * 在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们：[0,1]
 * 给定课程总量以及它们的先决条件，请你判断是否可能完成所有课程的学习？
 */

/**
 * 数组无法解决,链表应该能够解决但是非常麻烦 ❌ 失败
 *
 *
 * 必须判断是否足够课程量,
 * 并且没有死循环,准备用映射表去判断
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinishFail = function (numCourses, prerequisites) {
  // 一套循环只内要进行死循环判断,
  // 课程数量判断,
  // 映射表添加
  // 映射表添加好像和死循环判断不太兼容,只能先添加映射表
  const map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    let tempNum = prerequisites[i].length;
    if (numCourses - tempNum < 0) return false;
    for (let j = tempNum - 1; j >= 0; j--) {
      if (j > 0 && prerequisites[i][j - 1] > -1) {
        map.set(prerequisites[i][j], prerequisites[i][j - 1]);
      }
      if (prerequisites[i][j - 1] > -1) {
        let flag = prerequisites[i][j - 1];
        let temp = new Map();
        while (flag > -1) {
          if (temp.has(flag)) {
            return false;
          } else {
            temp.set(flag, true);
          }
          flag = map.get(flag);
        }
      }
    }
  }
  // 怎样判断死循环: 转回原点吗
  console.log(map);
  return true;
};
// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ])
// );
// console.log(
//     canFinish(2, [
//       [1, 0],
//     ])
//   );

// console.log(
//   canFinish(3, [
//     [0, 2],
//     [1, 2],
//     [2, 0],
//   ])
// );

/**
 * 官方题解
 *
 * 拓扑排序 问题
 *
 * 给定一个包含 n 个节点的有向图 G，我们给出它的节点编号的一种排列，如果满足：对于图 GG 中的任意一条有向边 (u, v)(u,v)，uu 在排列中都出现在 vv 的前面。
 * 那么称该排列是图 GG 的「拓扑排序」
 *
 * 根据上述定义,可得结论:
 * 1. 如果图G中存在环(即图G不是[有向无环图]),那么图G不存在拓扑排序.因为假设图中存在环x1,x2...xn,x1,那么x1在排列中必须出现在xn的前面,但xn同时也必须出现在x1前面,因此不存在一个满足要求的排列,也就不存在拓扑排序
 * 2. 如果图G是有向无环图,那么它的拓扑排序可能不止有一种.举一个最极端的例子，如果图 GG 值包含 nn 个节点却没有任何边，那么任意一种编号的排列都可以作为拓扑排序。
 *
 * 从上述分析可知,此题目可转成一个求拓扑排序的问题
 */

/**
 * 那么按照这个逻辑,我们必须构建出有向图,然后检查是否有环
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 构建有向图,
  // 怎么构建嘞,使用一层对象,映射数组吗,然后循环是否有环,那和我上边失败的差不多,不过开头就是使用数组

  let map = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    for (let j = 0; j < prerequisites[i].length-1; j++) {
      map.has(prerequisites[i][j])
        ? map.set(prerequisites[i][j], [
            ...map.get(prerequisites[i][j]),
            prerequisites[i][j + 1],
          ])
        : map.set(prerequisites[i][j], [prerequisites[i][j + 1]]);
    }
  }
};

console.log(
  canFinish(3, [
    [0, 2],
    [1, 2],
    [2, 0],
  ])
);