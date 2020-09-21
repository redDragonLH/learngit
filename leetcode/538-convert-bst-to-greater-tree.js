/**
 * 538. 把二叉搜索树转换为累加树
 *
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 左子树永远小于它的根节点,右子树永远大于它的根节点
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
  var sum = 0;
  function deep(node) {
    if (node != null) {
        deep(node.right);
      console.log(sum, node.val);
      sum += node.val;
      node.val = sum;
      deep(node.left);
    }
    return node;
  }
  deep(root);
  return root;
}
