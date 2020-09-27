/**
 * 235. 二叉搜索树的最近公共祖先
 *
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 二叉搜索树特性,如果,两个节点都比搜索的节点大或小,说明在这个节点的同一侧,如果在这个节点两侧说明这个节点就是最近公共祖先
 * 注意一下当前节点等于查询的节点自身的,
 * 注意使用二分法剪枝
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (
    root.val === p.val ||
    root.val === q.val ||
    (root.val > p.val && root.val < q.val) ||
    (root.val < p.val && root.val > q.val)
  ) {
    return root;
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
};
/**
 * 执行用时：112 ms, 在所有 JavaScript 提交中击败了49%的用户
 * 内存消耗：47.3 MB, 在所有 JavaScript 提交中击败了6.63%的用户
 */
