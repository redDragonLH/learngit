/**
 * 111. 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 有叶子节点就必须使用叶子结点的数据
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  let getDepth = (root, leftSubDepth, rightSubDepth) => {
    if (root) {
      leftSubDepth = getDepth(root.left);
      rightSubDepth = getDepth(root.right);
      return root.left && root.right
        ? Math.min(leftSubDepth, rightSubDepth) + 1
        : leftSubDepth + rightSubDepth + 1;
    }
    return 0;
  };
  return getDepth(root);
};
