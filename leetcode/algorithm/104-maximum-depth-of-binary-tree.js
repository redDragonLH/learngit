/**
 * 104. 二叉树的最大深度
 * 
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root,deep=0) {
    if(!root) return deep;
    return Math.max(maxDepth(root.left,deep + 1),maxDepth(root.right,deep + 1))
};
/**
 * 效率吊差
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了53.46%的用户
 * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了8.33%的用户
 */