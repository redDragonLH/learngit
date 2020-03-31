/**
 * 100 相同的树
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let q1q1 = true;
  if (p === q) return true;

  const preOrderTraverseNode = function(pnode, qnode) {
    if (pnode !== null && qnode !== null) {
      if (pnode.val !== qnode.val) {
        q1q1 = false;
      }
      preOrderTraverseNode(pnode.left, qnode.left);
      preOrderTraverseNode(pnode.right, qnode.right);
    } else if ((pnode && qnode === null) || (pnode === null && qnode)) {
      q1q1 = false;
    }
  };

  preOrderTraverseNode(p, q);
  return q1q1;
};
