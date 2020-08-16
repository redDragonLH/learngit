/**
 * 133. 克隆图
 *
 * 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 * 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
/**
 * 这个代码的问题是没有进行数据已处理验证,会导致死循环
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, map = new Map()) {
  if (!node) return null;
  return new Node(
    node.val,
    node.neighbor.length > 0 &&
      node.neighbors.map((e) => {
        return cloneGraph(e);
      })
  );
};
cloneGraph();

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node, map = new Map()) { // map用来进行缓存与解开死循环
  if (!node) return null;
  let newNode = map.get(node);
  if (newNode) {
    return newNode;
  }
  newNode = new Node(node.val);
  map.set(node, newNode);
  node.neighbors.forEach((neighbor) => {
    newNode.neighbors.push(cloneGraph(neighbor, map));
  });
  return newNode;
};
/**
 * 执行用时：112 ms, 在所有 JavaScript 提交中击败了5.50%的用户
 * 内存消耗：40.2 MB, 在所有 JavaScript 提交中击败了22.89%的用户
 */
