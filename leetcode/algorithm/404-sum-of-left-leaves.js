/**
 * 404. 左叶子之和
 * 
 * 计算给定二叉树的所有左叶子之和。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root==null) return 0;
    return sumOfLeftLeaves(root.left) 
        + sumOfLeftLeaves(root.right) 
        + (root.left!=null && root.left.left==null && root.left.right==null ? root.left.val : 0);
}
    